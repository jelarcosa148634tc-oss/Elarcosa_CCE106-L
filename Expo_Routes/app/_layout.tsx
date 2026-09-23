import { Stack, router, useSegments } from "expo-router";
import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { ThemeProvider } from "../context/ThemeContext";
import { EventProvider } from "../context/EventContext";
import { AuthProvider, useAuth } from "../context/AuthContext";

function AuthGate() {
  const { token, loading } = useAuth();
  const segments = useSegments();

  const isPortal = segments[0] === "portal";

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!token && !isPortal) {
      router.replace("/portal");
    }

    if (token && isPortal) {
      router.replace("/(tabs)");
    }
  }, [token, loading, isPortal]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#172554",
        }}
      >
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen
        name="portal"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "Modal",
        }}
      />

      <Stack.Screen
        name="event/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <EventProvider>
          <AuthGate />
        </EventProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
