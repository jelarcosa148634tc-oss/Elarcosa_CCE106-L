import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { useEvents } from "../../context/EventContext";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { darkMode } = useTheme();
  const { getEvent, toggleJoin } = useEvents();

  const eventId = String(id);

  const event = getEvent(eventId);

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#FFFFFF",
        text: "#FFFFFF",
        text2: "#172554",
        bodyText: "#CBD5E1",
        bodyText2: "#172554",
        muted: "#94A3B8",
        primary: "#60A5FA",
        accent: "#93C5FD",
        border: "#334155",
        actionCard: "#172554",
        routeBox: "#1E3A8A",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        text: "#172554",
        text2: "#172554",
        bodyText: "#334155",
        bodyText2: "#172554",
        muted: "#64748B",
        primary: "#2563EB",
        accent: "#93C5FD",
        border: "#E2E8F0",
        actionCard: "#DBEAFE",
        routeBox: "#1E3A8A",
      };

  const actionButtonColor = event?.joined ? "#EF4444" : "#10B981";

  if (!event) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />

        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />

        <SafeAreaView
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.invalidContainer}>
            <View style={styles.invalidIcon}>
              <Text style={styles.invalidIconText}>!</Text>
            </View>

            <Text style={styles.invalidTitle}>Event Not Found</Text>

            <Text style={[styles.invalidMessage, { color: colors.accent }]}>
              The event with ID "{eventId}" does not exist.
            </Text>

            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backButton,
                {
                  backgroundColor: darkMode ? "#1E3A8A" : "#2563EB",
                },
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.backButtonText}>Back to Events</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.topBackButton,
              {
                backgroundColor: darkMode
                  ? "rgba(147, 197, 253, 0.10)"
                  : "rgba(147, 197, 253, 0.12)",
                borderColor: darkMode
                  ? "rgba(147, 197, 253, 0.25)"
                  : "rgba(147, 197, 253, 0.35)",
              },
              pressed && styles.buttonPressed,
            ]}
          >
            <Text
              style={[
                styles.topBackArrow,
                {
                  color: darkMode ? "#BFDBFE" : "#DBEAFE",
                },
              ]}
            >
              ‹
            </Text>

            <Text
              style={[
                styles.topBackLabel,
                {
                  color: darkMode ? "#BFDBFE" : "#FFFFFF",
                },
              ]}
            >
              Go back
            </Text>
          </Pressable>

          <View style={styles.header}>
            <Text style={styles.brand}>EVENT DETAILS</Text>

            <Text style={styles.title}>{event.title}</Text>

            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>
                {event.category.toUpperCase()}
              </Text>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.detailSection}>
              <Text style={[styles.detailLabel, { color: colors.text2 }]}>
                DATE & TIME
              </Text>

              <Text style={[styles.detailText, { color: colors.text2 }]}>
                {event.dateTime}
              </Text>
            </View>

            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />

            <View style={styles.detailSection}>
              <Text style={[styles.detailLabel, { color: colors.text2 }]}>
                VENUE
              </Text>

              <Text style={[styles.detailText, { color: colors.text2 }]}>
                {event.venue}
              </Text>
            </View>

            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />

            <View style={styles.detailSection}>
              <Text style={[styles.detailLabel, { color: colors.text2 }]}>
                EVENT STATUS
              </Text>

              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    event.joined ? styles.joinedDot : styles.availableDot,
                  ]}
                />

                <Text style={[styles.statusText, { color: colors.bodyText2 }]}>
                  {event.joined
                    ? "You are joined to this event"
                    : "Available to join"}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[styles.actionCard, { backgroundColor: colors.actionCard }]}
          >
            <Text style={[styles.actionTitle, { color: colors.text }]}>
              {event.joined
                ? "You're attending this event"
                : "Interested in this event?"}
            </Text>

            <Text
              style={[styles.actionDescription, { color: colors.bodyText }]}
            >
              {event.joined
                ? "You can leave the event anytime using the button below."
                : "Join this event to mark your participation locally."}
            </Text>

            <Pressable
              onPress={() => toggleJoin(event.id)}
              style={({ pressed }) => [
                styles.actionButton,
                {
                  backgroundColor: actionButtonColor,
                },
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.actionButtonText}>
                {event.joined ? "Leave Event" : "Join Event"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.routeBox}>
            <Text style={styles.routeTitle}>DYNAMIC ROUTE</Text>

            <Text style={styles.routeText}>Event {eventId}</Text>

            <Text style={styles.routeDescription}>
              This screen uses the event ID from the dynamic route to display
              the matching event.
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
    padding: 24,
    paddingTop: 12,
    paddingBottom: 45,
  },

  topBackButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 13,
    marginBottom: 25,
  },

  topBackArrow: {
    fontSize: 25,
    fontWeight: "400",
    lineHeight: 22,
    marginRight: 5,
  },

  topBackLabel: {
    fontSize: 13,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.65,
  },

  header: {
    marginBottom: 25,
  },

  brand: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2.5,
    color: "#93C5FD",
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 38,
    marginBottom: 15,
  },

  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },

  categoryText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#FFFFFF",
  },

  card: {
    borderRadius: 24,
    padding: 22,
    elevation: 7,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  detailSection: {
    paddingVertical: 5,
  },

  detailLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 7,
  },

  detailText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 23,
  },

  divider: {
    height: 1,
    marginVertical: 18,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 9,
  },

  availableDot: {
    backgroundColor: "#2563EB",
  },

  joinedDot: {
    backgroundColor: "#16A34A",
  },

  statusText: {
    fontSize: 14,
    fontWeight: "600",
  },

  actionCard: {
    borderRadius: 22,
    padding: 22,
    marginTop: 18,
  },

  actionTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 7,
  },

  actionDescription: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 17,
  },

  actionButton: {
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: "center",
  },

  actionButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  routeBox: {
    backgroundColor: "#1E3A8A",
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
  },

  routeTitle: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#93C5FD",
    marginBottom: 6,
  },

  routeText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  routeDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#BFDBFE",
  },

  invalidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 28,
  },

  invalidIcon: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  invalidIconText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#2563EB",
  },

  invalidTitle: {
    fontSize: 25,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  invalidMessage: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 25,
  },

  backButton: {
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 30,
  },

  backButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
  },
});
