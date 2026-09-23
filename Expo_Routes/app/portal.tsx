import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "../context/AuthContext";

const VALID_USERNAME = "elarcosa@umindanao.edu.ph";
const VALID_PASSWORD = "elarcosa123";

export default function PortalScreen() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const cleanUsername = username.trim();

    // Empty field validation
    if (!cleanUsername || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // Username validation
    if (cleanUsername !== VALID_USERNAME) {
      setError("Invalid username or password.");
      return;
    }

    // Password validation
    if (password !== VALID_PASSWORD) {
      setError("Invalid username or password.");
      return;
    }

    try {
      setLoading(true);

      /*
       * Demo student information.
       * This is the account information used after
       * the professor's required credentials are accepted.
       */
      const student = {
        id: 1,
        username: VALID_USERNAME,
        email: VALID_USERNAME,
        firstName: "Jhonrhane",
        lastName: "Elarcosa",
        role: "student",
      };
      const demoToken = "elar​cosa-student-session";

      await login(demoToken, student);

      router.replace("/(tabs)");
    } catch (err) {
      console.log("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Student Portal</Text>

            <Text style={styles.subtitle}>University Student Login</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#94A3B8"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setError("");
              }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              editable={!loading}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError("");
              }}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              editable={!loading}
            />
          </View>

          {error !== "" && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠️ {error}</Text>
            </View>
          )}

          <Pressable
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.loginText}>Login</Text>
            )}
          </Pressable>

          <Text style={styles.infoText}>
            Enter your university credentials to access the student portal.
          </Text>
          <Text style={styles.infoText}>
            Username: elarcosa@umindanao.edu.ph
          </Text>
          <Text style={styles.infoText}>Password: elarcosa123</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    elevation: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  icon: {
    fontSize: 48,
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172554",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 6,
    textAlign: "center",
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#0F172A",
    backgroundColor: "#F8FAFC",
  },

  errorBox: {
    backgroundColor: "#FEE2E2",
    borderRadius: 12,
    padding: 12,
    marginBottom: 18,
  },

  errorText: {
    color: "#B91C1C",
    fontSize: 13,
    fontWeight: "600",
  },

  loginButton: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  loginButtonDisabled: {
    opacity: 0.7,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  infoText: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 20,
  },
});
