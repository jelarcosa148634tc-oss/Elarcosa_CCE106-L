import React, { useState } from "react"; // Added useState
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Pressable,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsScreen() {
  const { darkMode, toggleTheme } = useTheme();

  // 1. Define states for each new switch toggle
  const [pushNotif, setPushNotif] = useState(false);
  const [emailNotif, setEmailNotif] = useState(false);
  const [messagesNotif, setMessagesNotif] = useState(false);

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#1E293B",
        text: "#FFFFFF",
        muted: "#94A3B8",
        primary: "#60A5FA",
        line: "#334155",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        text: "#172554",
        muted: "#64748B",
        primary: "#2563EB",
        line: "#E2E8F0",
      };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.appLabel, { color: "#93C5FD" }]}>SETTINGS</Text>

        <Text style={styles.title}>App Settings</Text>

        <Text style={[styles.subtitle, { color: "#BFDBFE" }]}>
          Customize your app experience
        </Text>

        <Text style={styles.sectionTitle}>Appearance</Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🌙</Text>
            </View>

            <View style={styles.content}>
              <Text
                style={[
                  styles.itemTitle,
                  { color: darkMode ? "#FFFFFF" : "#172554" },
                ]}
              >
                Dark Mode
              </Text>

              <Text style={[styles.itemText, { color: colors.muted }]}>
                Change the appearance of all screens
              </Text>
            </View>

            <Switch
              value={darkMode}
              onValueChange={toggleTheme}
              trackColor={{
                false: "#CBD5E1",
                true: "#60A5FA",
              }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Notifications Settings</Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.settingRow}>
            <Text style={styles.settingIcon}>🔔</Text>

            <Text
              style={[
                styles.settingText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Push Notifications
            </Text>

            <Switch
              value={pushNotif}
              onValueChange={(value) => setPushNotif(value)}
              trackColor={{
                false: "#CBD5E1",
                true: "#60A5FA",
              }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.line }]} />

          <View style={styles.settingRow}>
            <Text style={styles.settingIcon}>📧</Text>

            <Text
              style={[
                styles.settingText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Email Notifications
            </Text>

            <Switch
              value={emailNotif}
              onValueChange={(value) => setEmailNotif(value)}
              trackColor={{
                false: "#CBD5E1",
                true: "#60A5FA",
              }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.line }]} />

          <View style={styles.settingRow}>
            <Text style={styles.settingIcon}>💬</Text>

            <Text
              style={[
                styles.settingText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Messages
            </Text>

            <Switch
              value={messagesNotif}
              onValueChange={(value) => setMessagesNotif(value)}
              trackColor={{
                false: "#CBD5E1",
                true: "#60A5FA",
              }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Other Settings</Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Pressable style={styles.option}>
            <Text style={styles.optionIcon}>👤</Text>

            <Text
              style={[
                styles.optionText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Account Information
            </Text>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <View style={[styles.divider, { backgroundColor: colors.line }]} />

          <Pressable style={styles.option}>
            <Text style={styles.optionIcon}>🔒</Text>

            <Text
              style={[
                styles.optionText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Privacy
            </Text>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <View style={[styles.divider, { backgroundColor: colors.line }]} />

          <Pressable style={styles.option}>
            <Text style={styles.optionIcon}>ℹ️</Text>

            <Text
              style={[
                styles.optionText,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              About This App
            </Text>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Developed using React Native</Text>

          <Text style={styles.footerSubtext}>React Native • Expo Router</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 40,
  },

  appLabel: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 28,
    marginBottom: 12,
  },

  card: {
    borderRadius: 22,
    padding: 20,
    elevation: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  content: {
    flex: 1,
    marginLeft: 14,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  itemText: {
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
  },

  settingIcon: {
    fontSize: 20,
    width: 35,
  },

  settingText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    marginVertical: 10,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
  },

  optionIcon: {
    fontSize: 20,
    width: 40,
  },

  optionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
  },

  arrow: {
    fontSize: 28,
    color: "#60A5FA",
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#DBEAFE",
    fontSize: 14,
    fontWeight: "700",
  },

  footerSubtext: {
    color: "#93C5FD",
    fontSize: 12,
    marginTop: 5,
  },
});
