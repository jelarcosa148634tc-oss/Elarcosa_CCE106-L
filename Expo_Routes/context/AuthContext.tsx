import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";

type Student = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: string;
};

type AuthContextType = {
  token: string | null;
  student: Student | null;
  loading: boolean;
  login: (newToken: string, newStudent: Student) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  const clearSession = async () => {
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("student");

    setToken(null);
    setStudent(null);
  };

  const restoreSession = async () => {
    try {
      const savedToken = await SecureStore.getItemAsync("accessToken");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });

      if (!response.ok) {
        await clearSession();
        return;
      }

      const data = await response.json();

      const savedStudent: Student = {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
      };

      await SecureStore.setItemAsync("student", JSON.stringify(savedStudent));

      setToken(savedToken);
      setStudent(savedStudent);
    } catch (error) {
      console.log("Unable to restore session.");
      await clearSession();
    } finally {
      setLoading(false);
    }
  };

  const login = async (newToken: string, newStudent: Student) => {
    await SecureStore.setItemAsync("accessToken", newToken);

    await SecureStore.setItemAsync("student", JSON.stringify(newStudent));

    setToken(newToken);
    setStudent(newStudent);
  };

  const logout = async () => {
    await clearSession();
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        student,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
