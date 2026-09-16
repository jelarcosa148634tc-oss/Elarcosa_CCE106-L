import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function ProfileScreen() {
  const { darkMode } = useTheme();

  const [fullName, setFullName] = useState("Jhonrhane Elarcosa");
  const [email, setEmail] = useState("j.elarcosa.148634.tc@umindanao.edu.ph");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [saved, setSaved] = useState(false);

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#1E293B",
        input: "#0F172A",
        text: "#FFFFFF",
        text2: "#FFFFFF",
        bodyText: "#CBD5E1",
        muted: "#94A3B8",
        primary: "#60A5FA",
        button: "#3B82F6",
        divider: "#334155",
        error: "#F87171",
        success: "#4ADE80",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        input: "#F8FAFC",
        text: "#172554",
        text2: "#FFFFFF",
        bodyText: "#334155",
        muted: "#64748B",
        primary: "#2563EB",
        button: "#2563EB",
        divider: "#E2E8F0",
        error: "#DC2626",
        success: "#16A34A",
      };

  const handleSave = () => {
    let valid = true;

    setNameError("");
    setEmailError("");
    setSaved(false);

    if (fullName.trim() === "") {
      setNameError("Full Name is required.");
      valid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      valid = false;
    } else if (
      !email.includes("@") ||
      email.indexOf("@") === email.length - 1
    ) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (valid) {
      setSaved(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.brand, { color: "#93C5FD" }]}>EVENTMATE</Text>

          <Text style={[styles.title, { color: colors.text2 }]}>
            My Profile
          </Text>

          {/* <Text style={[styles.subtitle, { color: colors.bodyText }]}>
            Manage your student information.
          </Text> */}
        </View>

        {/* PROFILE CARD */}
        <View style={[styles.profileCard, { backgroundColor: colors.card }]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JE</Text>
          </View>

          <Text style={[styles.savedName, { color: colors.text }]}>
            {fullName}
          </Text>

          <Text style={[styles.savedEmail, { color: colors.muted }]}>
            {email}
          </Text>

          <View style={[styles.divider, { backgroundColor: colors.divider }]} />

          {/* FULL NAME */}
          <View style={styles.inputSection}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              FULL NAME
            </Text>

            <TextInput
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setNameError("");
                setSaved(false);
              }}
              placeholder="Enter your full name"
              placeholderTextColor={colors.muted}
              style={[
                styles.input,
                {
                  backgroundColor: colors.input,
                  color: colors.text,
                  borderColor: nameError ? colors.error : colors.divider,
                },
              ]}
            />

            {nameError !== "" && (
              <Text style={[styles.errorText, { color: colors.error }]}>
                {nameError}
              </Text>
            )}
          </View>

          {/* EMAIL */}
          <View style={styles.inputSection}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              EMAIL ADDRESS
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError("");
                setSaved(false);
              }}
              placeholder="Enter your email"
              placeholderTextColor={colors.muted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                styles.input,
                {
                  backgroundColor: colors.input,
                  color: colors.text,
                  borderColor: emailError ? colors.error : colors.divider,
                },
              ]}
            />

            {emailError !== "" && (
              <Text style={[styles.errorText, { color: colors.error }]}>
                {emailError}
              </Text>
            )}
          </View>

          {/* SAVE BUTTON */}
          <Pressable
            onPress={handleSave}
            style={({ pressed }) => [
              styles.saveButton,
              { backgroundColor: colors.button },
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.saveButtonText}>Save Profile</Text>
          </Pressable>

          {/* SAVED CONFIRMATION */}
          {saved && (
            <View
              style={[
                styles.successBox,
                {
                  backgroundColor: darkMode ? "#14532D" : "#DCFCE7",
                },
              ]}
            >
              <Text style={[styles.successText, { color: colors.success }]}>
                Profile saved successfully.
              </Text>
            </View>
          )}
        </View>

        {/* INFORMATION CARD */}
        <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.infoTitle, { color: colors.text }]}>
            Student Information
          </Text>

          <Text style={[styles.infoText, { color: colors.bodyText }]}>
            Your profile information is stored locally in the application. No
            online account or server is required.
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

  brand: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 3,
    marginBottom: 9,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 7,
  },

  // subtitle: {
  //   fontSize: 14,
  //   lineHeight: 21,
  // },

  profileCard: {
    borderRadius: 24,
    padding: 22,
    elevation: 7,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 14,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  savedName: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },

  savedEmail: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
  },

  divider: {
    height: 1,
    width: "100%",
    marginVertical: 22,
  },

  inputSection: {
    marginBottom: 18,
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize: 14,
  },

  errorText: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
  },

  saveButton: {
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 3,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  buttonPressed: {
    opacity: 0.65,
  },

  successBox: {
    borderRadius: 13,
    padding: 13,
    marginTop: 14,
    alignItems: "center",
  },

  successText: {
    fontSize: 13,
    fontWeight: "700",
  },

  infoCard: {
    borderRadius: 20,
    padding: 20,
    marginTop: 18,
    elevation: 4,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 7,
  },

  infoText: {
    fontSize: 13,
    lineHeight: 20,
  },

  footerText: {
    fontSize: 14,
    fontWeight: "800",
  },
});
