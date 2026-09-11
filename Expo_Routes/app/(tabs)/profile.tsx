import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function ProfileScreen() {
  const { darkMode } = useTheme();

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#1E293B",
        text: "#FFFFFF",
        text1: "#FFFFFF",
        bodyText: "#CBD5E1",
        bodyText1: "#DBEAFE",
        muted: "#94A3B8",
        primary: "#60A5FA",
        primary1: "#172554",
        divider: "#334155",
        tag: "#334155",
        tagText: "#FFFFFF",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        text: "#172554",
        text1: "#FFFFFF",
        bodyText: "#334155",
        bodyText1: "#DBEAFE",
        muted: "#64748B",
        primary: "#93C5FD",
        primary1: "#172554",
        divider: "#E2E8F0",
        tag: "#DBEAFE",
        tagText: "#172554",
      };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.appLabel, { color: colors.primary }]}>
            PROFILE INTRODUCTION
          </Text>

          <Text style={[styles.title, { color: colors.text1 }]}>
            Hello, I'm Jhonrhane!
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JE</Text>
          </View>

          <Text style={[styles.name, { color: colors.text }]}>
            Jhonrhane Elarcosa
          </Text>

          <Text style={[styles.role, { color: colors.muted }]}>
            Information Technology Student
          </Text>

          <View style={[styles.divider, { backgroundColor: colors.divider }]} />

          <View style={styles.infoSection}>
            <Text style={[styles.infoLabel, { color: colors.primary1 }]}>
              🎓 COURSE / SECTION
            </Text>

            <Text style={[styles.infoText, { color: colors.bodyText }]}>
              BS Information Technology
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.infoLabel, { color: colors.primary1 }]}>
              💡 APP IDEA
            </Text>

            <Text style={[styles.infoText, { color: colors.bodyText }]}>
              A user-friendly mobile profile application that introduces
              students, displays essential background information, and
              highlights their primary interests and long-term goals.
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.infoLabel, { color: colors.primary1 }]}>
              🚀 GOAL
            </Text>

            <Text style={[styles.infoText, { color: colors.bodyText }]}>
              Focused on building clean, interactive, and modern mobile
              applications using React Native.
            </Text>
          </View>
        </View>

        <View style={[styles.interestsCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            My Interests
          </Text>

          <View style={styles.tagContainer}>
            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text style={[styles.tagText, { color: colors.tagText }]}>
                💻 Coding
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text style={[styles.tagText, { color: colors.tagText }]}>
                👾 Gaming
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text style={[styles.tagText, { color: colors.tagText }]}>
                🐱 Cats
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text style={[styles.tagText, { color: colors.tagText }]}>
                📱 App Development
              </Text>
            </View>

            <View style={[styles.tag, { backgroundColor: colors.tag }]}>
              <Text style={[styles.tagText, { color: colors.tagText }]}>
                📚 Learning
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.bodyText1 }]}>
            Developed using React Native
          </Text>

          <Text style={[styles.footerSubtext]}>
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
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },

  card: {
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    elevation: 8,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
  },

  role: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },

  divider: {
    height: 1,
    width: "100%",
    marginVertical: 22,
  },

  infoSection: {
    width: "100%",
    marginBottom: 18,
  },

  infoLabel: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 6,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 22,
  },

  interestsCard: {
    borderRadius: 22,
    padding: 22,
    marginTop: 20,
    elevation: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
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
  },

  footer: {
    alignItems: "center",
    marginTop: 25,
  },

  footerText: {
    fontSize: 14,
    fontWeight: "700",
  },

  footerSubtext: {
    color: "#93C5FD",
    fontSize: 12,
    marginTop: 5,
  },
});
