import { Stack } from "expo-router";
import { ThemeProvider } from "../context/ThemeContext";
import { EventProvider } from "../context/EventContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <EventProvider>
        <Stack>
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
      </EventProvider>
    </ThemeProvider>
  );
}
