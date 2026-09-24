import { useEffect, useState } from "react";
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

import { loginUser, getCurrentUser } from "../services/authService";
import { saveToken, getToken, deleteToken } from "../storage/tokenStorage";

export default function Index() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    restoreSession();
  }, []);

  const restoreSession = async () => {
    try {
      const token = await getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      const userProfile = await getCurrentUser(token);

      setProfile(userProfile);
    } catch (err) {
      // Token is invalid or expired
      await deleteToken();
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter your username and password.");
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser(username, password);

      await saveToken(data.accessToken);

      const userProfile = await getCurrentUser(data.accessToken);

      setProfile(userProfile);
    } catch (err) {
      setError("Login failed. Check your username and password.");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      await deleteToken();

      setProfile(null);

      setError("");
    } finally {
      setLoading(false);
    }
  };

  if (loading && profile === null && error === "") {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color="#2563EB" />

        <Text style={styles.loadingText}>Checking secure session...</Text>
      </View>
    );
  }

  if (profile) {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.profileScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileCard}>
            <Text style={styles.profileTitle}>Secure Profile</Text>

            <Text style={styles.profileSubtitle}>
              You are successfully authenticated
            </Text>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {profile.firstName?.charAt(0)}
                {profile.lastName?.charAt(0)}
              </Text>
            </View>

            <Text style={styles.name}>
              {profile.firstName} {profile.lastName}
            </Text>

            <Text style={styles.username}>@{profile.username}</Text>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>First Name</Text>
              <Text style={styles.infoValue}>{profile.firstName}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Last Name</Text>
              <Text style={styles.infoValue}>{profile.lastName}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Username</Text>
              <Text style={styles.infoValue}>{profile.username}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{profile.email}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>User ID</Text>
              <Text style={styles.infoValue}>{profile.id}</Text>
            </View>

            <View style={styles.successBox}>
              <Text style={styles.successText}>✓ Secure session active</Text>
            </View>

            <Pressable
              style={styles.logoutButton}
              onPress={handleLogout}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.logoutText}>Logout</Text>
              )}
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }

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
          <Text style={styles.title}>Secure Profile</Text>

          <Text style={styles.subtitle}>
            Sign in to view your protected profile
          </Text>

          <Text style={styles.label}>Username</Text>

          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
            placeholderTextColor="#94A3B8"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
          />

          {error !== "" && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠️ {error}</Text>
            </View>
          )}

          <Pressable
            style={[styles.loginButton, loading && styles.disabledButton]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <View style={styles.loadingButton}>
                <ActivityIndicator size="small" color="#FFFFFF" />

                <Text style={styles.loginText}>Signing in...</Text>
              </View>
            ) : (
              <Text style={styles.loginText}>Login</Text>
            )}
          </Pressable>

          <Text style={styles.info}>Username: emilys</Text>
          <Text style={styles.info}>Password account: emilyspass</Text>
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
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
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
    marginBottom: 18,
  },

  errorBox: {
    backgroundColor: "#FEE2E2",
    borderRadius: 12,
    padding: 12,
    marginBottom: 18,
  },

  errorText: {
    color: "#B91C1C",
    fontWeight: "600",
  },

  loginButton: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  disabledButton: {
    opacity: 0.7,
  },

  loadingButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  info: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 12,
    marginTop: 18,
  },

  loadingScreen: {
    flex: 1,
    backgroundColor: "#172554",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 14,
  },

  profileScrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
  },

  profileTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172554",
    textAlign: "center",
  },

  profileSubtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#172554",
    textAlign: "center",
  },

  username: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 22,
  },

  infoRow: {
    marginBottom: 16,
  },

  infoLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },

  successBox: {
    backgroundColor: "#6df39c",
    borderRadius: 12,
    padding: 13,
    marginTop: 4,
    marginBottom: 18,
  },

  successText: {
    color: "#15803D",
    fontWeight: "700",
    textAlign: "center",
  },

  logoutButton: {
    height: 54,
    backgroundColor: "#ed0b0b",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
