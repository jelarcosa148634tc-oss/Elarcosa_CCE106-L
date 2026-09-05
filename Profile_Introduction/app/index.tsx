import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";

export default function ProfileIntroduction() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appLabel}>PROFILE INTRODUCTION</Text>

          <Text style={styles.title}>Hello, I'm Jhonrhane! 👋</Text>

          <Text style={styles.subtitle}>
            Welcome to my personal introduction app
          </Text>
        </View>

        {/* Profile Card */}
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JE</Text>
          </View>

          <Text style={styles.name}>Jhonrhane Elarcosa</Text>

          <Text style={styles.role}>Information Technology Student</Text>

          <View style={styles.divider} />

          {/* Information */}
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>🎓 COURSE / SECTION</Text>
            <Text style={styles.infoText}>BS Information Technology</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>💡 APP IDEA</Text>
            <Text style={styles.infoText}>
              A simple mobile profile application that introduces a student,
              displays basic information, and gives a short overview of their
              interests and goals.
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>🚀 GOAL</Text>
            <Text style={styles.infoText}>
              To learn how to create clean and interactive mobile applications
              using React Native.
            </Text>
          </View>
        </View>

        {/* Skills / Interests */}
        <View style={styles.interestsCard}>
          <Text style={styles.sectionTitle}>My Interests</Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>💻 Coding</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🌱 Gardening</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>🐱 Cats</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>📱 App Development</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Built with React Native</Text>

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
    backgroundColor: "#172554",
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
    color: "#93C5FD",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#BFDBFE",
    lineHeight: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
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
    color: "#172554",
    textAlign: "center",
  },

  role: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
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
    color: "#2563EB",
    letterSpacing: 0.8,
    marginBottom: 6,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#334155",
  },

  interestsCard: {
    backgroundColor: "#1E3A8A",
    borderRadius: 22,
    padding: 22,
    marginTop: 20,
  },

  sectionTitle: {
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
    backgroundColor: "#3B82F6",
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
