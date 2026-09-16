import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import StatCard from "../../components/StatCard";
import { useEvents } from "../../context/EventContext";
import { useTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  const { darkMode } = useTheme();
  const { width } = useWindowDimensions();
  const { events } = useEvents();

  const isWideScreen = width >= 600;

  const colors = darkMode
    ? {
        background: "#0F172A",
        hero: "#1E3A8A",
        card: "#1E293B",
        cardSecondary: "#172554",
        primary: "#60A5FA",
        accent: "#93C5FD",
        text: "#FFFFFF",
        bodyText: "#CBD5E1",
        bodyText2: "#334155",
        muted: "#94A3B8",
        border: "#334155",
        button: "#2563EB",
        buttonPressed: "#1D4ED8",
      }
    : {
        background: "#172554",
        hero: "#1E40AF",
        card: "#FFFFFF",
        cardSecondary: "#EFF6FF",
        primary: "#2563EB",
        accent: "#BFDBFE",
        text: "#FFFFFF",
        bodyText: "#334155",
        bodyText2: "#334155",
        muted: "#64748B",
        border: "#DBEAFE",
        button: "#2563EB",
        buttonPressed: "#1D4ED8",
      };

  const totalEvents = events.length;

  const joinedEvents = events.filter((event) => event.joined).length;

  const upcomingEvents = events.filter((event) => !event.joined).length;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          isWideScreen && styles.wideContainer,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <Text style={[styles.brand, { color: colors.accent }]}>
            EVENTMATE
          </Text>

          <Text style={styles.pageTitle}>Campus Event Explorer</Text>

          <Text style={[styles.pageSubtitle, { color: colors.accent }]}>
            Discover what's happening around your campus.
          </Text>
        </View>

        {/* WELCOME HERO */}

        <View style={[styles.heroCard, { backgroundColor: colors.hero }]}>
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>WELCOME BACK</Text>

            <Text style={styles.heroTitle}>Hello, Jhonrhane!</Text>

            <Text
              style={[
                styles.heroText,
                { color: colors.accent, marginBottom: 35 },
              ]}
            >
              Explore campus activities, discover new experiences, and join
              events that interest you.
            </Text>

            <Link href="/(tabs)/events" asChild>
              <Pressable
                style={({ pressed }) => [
                  styles.exploreButton,
                  {
                    backgroundColor: pressed
                      ? colors.buttonPressed
                      : colors.button,
                  },
                ]}
              >
                <Text style={styles.exploreButtonText}>Explore Events</Text>

                <Text style={styles.arrow}>→</Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.heroDecoration}>
            <View
              style={[styles.decorationLarge, { borderColor: colors.accent }]}
            />

            <View
              style={[
                styles.decorationSmall,
                { backgroundColor: colors.accent },
              ]}
            />
          </View>
        </View>

        {/* OVERVIEW */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>

          <Text style={[styles.sectionSubtitle, { color: colors.accent }]}>
            Your event activity
          </Text>
        </View>

        <View
          style={[
            styles.statsContainer,
            isWideScreen && styles.statsContainerWide,
          ]}
        >
          <View style={styles.statWrapper}>
            <StatCard label="Total Events" value={String(totalEvents)} />
          </View>

          <View style={styles.statWrapper}>
            <StatCard label="Joined Events" value={String(joinedEvents)} />
          </View>

          <View
            style={[styles.statWrapper, isWideScreen && styles.statWrapperWide]}
          >
            <StatCard label="Upcoming Events" value={String(upcomingEvents)} />
          </View>
        </View>

        {/* UPCOMING EVENTS */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>

          <Text style={[styles.sectionSubtitle, { color: colors.accent }]}>
            Don't miss out
          </Text>
        </View>

        <View style={[styles.eventPreview, { backgroundColor: colors.card }]}>
          <View style={styles.eventAccent} />

          <View style={styles.eventContent}>
            <Text style={[styles.eventCategory, { color: colors.primary }]}>
              ACADEMIC
            </Text>

            <Text
              style={[
                styles.eventTitle,
                { color: darkMode ? colors.text : "#172554" },
              ]}
            >
              Campus Coding Workshop
            </Text>

            <Text style={[styles.eventDate, { color: colors.muted }]}>
              September 20, 2026 • 9:00 AM
            </Text>

            <Text style={[styles.eventVenue, { color: colors.bodyText }]}>
              Computer Laboratory 1
            </Text>
          </View>
        </View>

        <View style={[styles.eventPreview, { backgroundColor: colors.card }]}>
          <View style={styles.eventAccent} />

          <View style={styles.eventContent}>
            <Text style={[styles.eventCategory, { color: colors.primary }]}>
              SPORTS
            </Text>

            <Text
              style={[
                styles.eventTitle,
                { color: darkMode ? colors.text : "#172554" },
              ]}
            >
              Basketball Tournament
            </Text>

            <Text style={[styles.eventDate, { color: colors.muted }]}>
              September 21, 2026 • 2:00 PM
            </Text>

            <Text style={[styles.eventVenue, { color: colors.bodyText }]}>
              University Gym
            </Text>
          </View>
        </View>

        {/* QUICK ACCESS */}

        <View
          style={[styles.quickCard, { backgroundColor: colors.cardSecondary }]}
        >
          <Text
            style={[
              styles.quickTitle,
              { color: darkMode ? colors.text : "#172554" },
            ]}
          >
            Looking for more events?
          </Text>

          <Text style={[styles.quickText, { color: colors.bodyText }]}>
            Browse the complete event list and filter activities by category.
          </Text>

          <Link href="/(tabs)/events" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                {
                  backgroundColor: pressed
                    ? colors.buttonPressed
                    : colors.button,
                },
              ]}
            >
              <Text style={styles.secondaryButtonText}>View All Events</Text>
            </Pressable>
          </Link>
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
    paddingBottom: 45,
  },

  wideContainer: {
    paddingHorizontal: "10%",
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

  pageTitle: {
    fontSize: 31,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 7,
  },

  pageSubtitle: {
    fontSize: 14,
    lineHeight: 21,
  },

  heroCard: {
    minHeight: 245,
    borderRadius: 28,
    padding: 25,
    overflow: "hidden",
    position: "relative",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  heroContent: {
    width: "82%",
    zIndex: 2,
  },

  heroLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#BFDBFE",
    marginBottom: 9,
  },

  heroTitle: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 9,
  },

  heroText: {
    fontSize: 13,
    lineHeight: 20,
  },

  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 6,
    fontWeight: "600",
    lineHeight: 16,
  },

  heroDecoration: {
    position: "absolute",
    right: -35,
    bottom: -35,
    width: 150,
    height: 150,
  },

  decorationLarge: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    opacity: 0.25,
  },

  decorationSmall: {
    position: "absolute",
    width: 55,
    height: 55,
    borderRadius: 28,
    right: 45,
    top: 45,
    opacity: 0.15,
  },

  sectionHeader: {
    marginTop: 28,
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  sectionSubtitle: {
    fontSize: 12,
    marginTop: 3,
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  statsContainerWide: {
    justifyContent: "space-between",
  },

  statWrapper: {
    flex: 1,
    minWidth: "30%",
  },

  statWrapperWide: {
    minWidth: "30%",
  },

  eventPreview: {
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  eventAccent: {
    width: 5,
    backgroundColor: "#2563EB",
  },

  eventContent: {
    flex: 1,
    padding: 18,
  },

  eventCategory: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  eventTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 6,
  },

  eventDate: {
    fontSize: 12,
    marginBottom: 5,
  },

  eventVenue: {
    fontSize: 13,
    fontWeight: "600",
  },

  quickCard: {
    borderRadius: 22,
    padding: 21,
    marginTop: 12,
  },

  quickTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 7,
  },

  quickText: {
    fontSize: 13,
    lineHeight: 20,
  },

  secondaryButton: {
    alignSelf: "flex-start",
    marginTop: 15,
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 12,
  },

  secondaryButtonText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "500",
    color: "#0066cc",
    textDecorationLine: "underline",
  },

  footerText: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
});
