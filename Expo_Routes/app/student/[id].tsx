import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

export default function StudentScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { darkMode } = useTheme();

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#1E293B",
        text: "#FFFFFF",
        bodyText: "#CBD5E1",
        bodyText1: "#CBD5E1",
        muted: "#94A3B8",
        primary: "#60A5FA",
        primary1: "#CBD5E1",
        secondary: "#334155",
        iconBackground: "#334155",
        divider: "#475569",
        button: "#3B82F6",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        text: "#172554",
        bodyText: "#334155",
        bodyText1: "#CBD5E1",
        muted: "#64748B",
        primary: "#2563EB",
        primary1: "#CBD5E1",
        secondary: "#DBEAFE",
        iconBackground: "#DBEAFE",
        divider: "#E2E8F0",
        button: "#2563EB",
      };

  const validStudents: Record<string, string> = {
    "101": "Jhonrhane Elarcosa",
    "102": "Information Technology Student",
    "103": "React Native Learner",
  };

  const studentName = validStudents[String(id)];

  if (!studentName) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />

        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />

        <SafeAreaView
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.invalidContainer}>
            <Text style={styles.icon}>⚠️</Text>

            <Text style={[styles.title, { color: colors.text }]}>
              Student Not Found
            </Text>

            <Text style={[styles.message, { color: colors.bodyText }]}>
              The student ID "{String(id)}" is not valid.
            </Text>

            <Pressable
              style={[styles.button, { backgroundColor: colors.button }]}
              onPress={() => router.back()}
            >
              <Text style={styles.buttonText}>← Go Back</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* <Pressable wala pa nako designa ni hehe
            style={[
              styles.topBackButton,
              { backgroundColor: colors.secondary },
            ]}
            onPress={() => router.back()}
          >
            <Text style={[styles.topBackText, { color: colors.text }]}>←</Text>
          </Pressable> */}

          <View style={styles.header}>
            <Text style={[styles.label, { color: colors.primary1 }]}>
              STUDENT ROUTE
            </Text>

            <Text style={[styles.title, { color: colors.text }]}>
              Student Profile
            </Text>

            <Text style={[styles.subtitle, { color: colors.bodyText1 }]}>
              Student information from the dynamic route
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text style={styles.graduationIcon}>🎓</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={[styles.infoLabel, { color: colors.primary }]}>
                STUDENT ID
              </Text>

              <Text style={[styles.idText, { color: colors.text }]}>
                {String(id)}
              </Text>
            </View>

            <View
              style={[styles.divider, { backgroundColor: colors.divider }]}
            />

            <View style={styles.infoSection}>
              <Text style={[styles.infoLabel, { color: colors.primary }]}>
                INFORMATION
              </Text>

              <Text style={[styles.nameText, { color: colors.bodyText }]}>
                {studentName}
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.button, { backgroundColor: colors.button }]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>← Back</Text>
          </Pressable>

          <View
            style={[styles.routeBox, { backgroundColor: colors.secondary }]}
          >
            <Text style={[styles.routeTitle, { color: colors.primary }]}>
              Dynamic Route
            </Text>

            <Text style={[styles.routeText, { color: colors.bodyText }]}>
              You are viewing student/{String(id)}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 40,
  },

  topBackButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  topBackText: {
    fontSize: 28,
    fontWeight: "400",
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },

  label: {
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 21,
  },

  card: {
    width: "100%",
    borderRadius: 25,
    padding: 25,
    elevation: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  iconCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  graduationIcon: {
    fontSize: 38,
  },

  infoSection: {
    width: "100%",
  },

  infoLabel: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 7,
  },

  idText: {
    fontSize: 42,
    fontWeight: "800",
  },

  nameText: {
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 30,
  },

  divider: {
    height: 1,
    width: "100%",
    marginVertical: 25,
  },

  button: {
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 17,
    marginTop: 25,
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  routeBox: {
    borderRadius: 18,
    padding: 18,
    marginTop: 22,
  },

  routeTitle: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 6,
  },

  routeText: {
    fontSize: 14,
  },

  invalidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  icon: {
    fontSize: 50,
    marginBottom: 15,
  },

  message: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 5,
    marginBottom: 25,
  },
});
