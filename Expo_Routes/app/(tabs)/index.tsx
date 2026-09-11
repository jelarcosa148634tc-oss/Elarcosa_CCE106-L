import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "expo-router";

export default function HomeScreen() {
  const { darkMode } = useTheme();

  const colors = darkMode
    ? {
        background: "#0F172A",
        header: "#020617",
        card: "#1E293B",
        primary: "#60A5FA",
        secondary: "#93C5FD",
        text: "#FFFFFF",
        bodyText: "#CBD5E1",
        muted: "#94A3B8",
        iconBackground: "#334155",
        interest: "#1E293B",
        tag: "#334155",
      }
    : {
        background: "#172554",
        header: "#172554",
        card: "#FFFFFF",
        primary: "#2563EB",
        secondary: "#93C5FD",
        text: "#FFFFFF",
        bodyText: "#334155",
        muted: "#64748B",
        iconBackground: "#DBEAFE",
        interest: "#FFFFFF",
        tag: "#DBEAFE",
      };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "light-content"} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.appLabel, { color: colors.secondary }]}>
            STUDENT DASHBOARD
          </Text>

          <Text style={styles.title}>Welcome, Jhonrhane!</Text>

          <Text style={[styles.subtitle, { color: "#BFDBFE" }]}>
            Explore your student profile and projects
          </Text>
        </View>

        <View style={[styles.welcomeCard, { backgroundColor: colors.card }]}>
          <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>JE</Text>
          </View>

          <View style={styles.welcomeContent}>
            <Text
              style={[
                styles.welcomeTitle,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              Hello, Jhonrhane!
            </Text>

            <Text style={[styles.welcomeText, { color: colors.muted }]}>
              Welcome to your personal student dashboard. Keep learning,
              creating, and improving your skills.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Overview</Text>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={styles.statIcon}>🎓</Text>

            <Text
              style={[
                styles.statNumber,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              BSIT
            </Text>

            <Text style={[styles.statLabel, { color: colors.muted }]}>
              Course
            </Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={styles.statIcon}>💻</Text>

            <Text
              style={[
                styles.statNumber,
                { color: darkMode ? "#FFFFFF" : "#172554" },
              ]}
            >
              IT
            </Text>

            <Text style={[styles.statLabel, { color: colors.muted }]}>
              Field
            </Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.cardTitle,
              { color: darkMode ? "#FFFFFF" : "#172554" },
            ]}
          >
            💡 About This App
          </Text>

          <Text style={[styles.cardText, { color: colors.bodyText }]}>
            This application is a simple student mobile app created using React
            Native and Expo. It demonstrates navigation, profile information,
            and interactive features.
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.cardTitle,
              { color: darkMode ? "#FFFFFF" : "#172554" },
            ]}
          >
            🚀 What I'm Learning
          </Text>

          <View style={styles.learningItem}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text>📱</Text>
            </View>

            <View style={styles.learningContent}>
              <Text
                style={[
                  styles.learningTitle,
                  { color: darkMode ? "#FFFFFF" : "#1E293B" },
                ]}
              >
                React Native
              </Text>

              <Text style={[styles.learningText, { color: colors.muted }]}>
                Building mobile applications
              </Text>
            </View>
          </View>

          <View style={styles.learningItem}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text>🧭</Text>
            </View>

            <View style={styles.learningContent}>
              <Text
                style={[
                  styles.learningTitle,
                  { color: darkMode ? "#FFFFFF" : "#1E293B" },
                ]}
              >
                Expo Router
              </Text>

              <Text style={[styles.learningText, { color: colors.muted }]}>
                Learning app navigation
              </Text>
            </View>
          </View>

          <View style={styles.learningItem}>
            <View
              style={[
                styles.iconBox,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text>💻</Text>
            </View>

            <View style={styles.learningContent}>
              <Text
                style={[
                  styles.learningTitle,
                  { color: darkMode ? "#FFFFFF" : "#1E293B" },
                ]}
              >
                Programming
              </Text>

              <Text style={[styles.learningText, { color: colors.muted }]}>
                Improving coding skills
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.interestsCard, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.interestsTitle,
              { color: darkMode ? "#FFFFFF" : "#172554" },
            ]}
          >
            My Interests
          </Text>

          <View style={styles.tagContainer}>
            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text
                style={
                  (styles.tagText, { color: darkMode ? "#FFFFFF" : "#172554" })
                }
              >
                💻 Coding
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text
                style={
                  (styles.tagText, { color: darkMode ? "#FFFFFF" : "#172554" })
                }
              >
                👾 Gaming
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text
                style={
                  (styles.tagText, { color: darkMode ? "#FFFFFF" : "#172554" })
                }
              >
                🐱 Cats
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text
                style={
                  (styles.tagText, { color: darkMode ? "#FFFFFF" : "#172554" })
                }
              >
                📱 App Development
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text
                style={
                  (styles.tagText, { color: darkMode ? "#FFFFFF" : "#172554" })
                }
              >
                📚 Learning
              </Text>
            </View>
          </View>
        </View>

        <Link href="/student/101" asChild>
          <Pressable style={styles.studentButton}>
            <Text style={styles.studentButtonText}>View Student Route</Text>
          </Pressable>
        </Link>

        <Link href="/student/999" asChild>
          <Pressable style={styles.studentButton}>
            <Text style={styles.studentButtonText}>
              View Student Route the 999 test
            </Text>
          </Pressable>
        </Link>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Developed using React Native</Text>

          <Text style={styles.footerSubtext}>
            Learning • Creating • Improving
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  studentButton: {
    backgroundColor: "#2563EB",
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 18,
  },

  studentButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  scrollContainer: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 25,
  },

  appLabel: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },

  welcomeCard: {
    borderRadius: 25,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    elevation: 8,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 23,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  welcomeContent: {
    flex: 1,
    marginLeft: 16,
  },

  welcomeTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 5,
  },

  welcomeText: {
    fontSize: 13,
    lineHeight: 19,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 25,
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
  },

  statCard: {
    flex: 1,
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    elevation: 5,
  },

  statIcon: {
    fontSize: 25,
    marginBottom: 7,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "800",
  },

  statLabel: {
    fontSize: 12,
    marginTop: 3,
  },

  card: {
    borderRadius: 22,
    padding: 22,
    marginTop: 18,
    elevation: 6,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 12,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 22,
  },

  learningItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  learningContent: {
    marginLeft: 13,
  },

  learningTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  learningText: {
    fontSize: 13,
    marginTop: 3,
  },

  interestsCard: {
    borderRadius: 22,
    padding: 22,
    marginTop: 20,
  },

  interestsTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 15,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 14,
  },

  tagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  footer: {
    alignItems: "center",
    marginTop: 25,
  },

  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#DBEAFE",
  },

  footerSubtext: {
    fontSize: 12,
    color: "#93C5FD",
    marginTop: 5,
  },
});
