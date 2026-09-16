import React, { useState } from "react";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import EventCard from "../../components/EventCard";
import { useTheme } from "../../context/ThemeContext";
import { useEvents } from "../../context/EventContext";

const categories = ["All", "Academic", "Sports", "Entertainment"];

export default function EventsScreen() {
  const router = useRouter();
  const { darkMode } = useTheme();
  const { events } = useEvents();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const colors = darkMode
    ? {
        background: "#0F172A",
        card: "#1E293B",
        text: "#FFFFFF",
        subtitle: "#CBD5E1",
        muted: "#93C5FD",
        primary: "#60A5FA",
        button: "#2563EB",
        buttonPressed: "#1D4ED8",
      }
    : {
        background: "#172554",
        card: "#FFFFFF",
        text: "#FFFFFF",
        subtitle: "#BFDBFE",
        muted: "#93C5FD",
        primary: "#2563EB",
        button: "#2563EB",
        buttonPressed: "#1D4ED8",
      };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={[styles.brand, { color: colors.muted }]}>
                EVENTMATE
              </Text>

              <Text style={[styles.title, { color: colors.text }]}>
                Campus Events
              </Text>

              <Text style={[styles.subtitle, { color: colors.subtitle }]}>
                Discover events happening around your campus.
              </Text>
            </View>

            <Text style={[styles.filterTitle, { color: colors.text }]}>
              Filter Events
            </Text>

            <View style={styles.filterContainer}>
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <Pressable
                    key={category}
                    onPress={() => setSelectedCategory(category)}
                    style={({ pressed }) => [
                      styles.filterButton,
                      {
                        backgroundColor: active ? colors.button : colors.card,
                      },
                      pressed && styles.filterButtonPressed,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        {
                          color: active
                            ? "#FFFFFF"
                            : darkMode
                              ? "#FFFFFF"
                              : "#172554",
                        },
                      ]}
                    >
                      {category}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.resultRow}>
              <Text style={[styles.resultText, { color: colors.muted }]}>
                {filteredEvents.length}{" "}
                {filteredEvents.length === 1 ? "event" : "events"} available
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() =>
              router.push({
                pathname: "/event/[id]",
                params: {
                  id: item.id,
                },
              })
            }
          />
        )}
        ListEmptyComponent={
          <View style={[styles.emptyCard, { backgroundColor: colors.card }]}>
            <Text
              style={[
                styles.emptyTitle,
                {
                  color: darkMode ? "#FFFFFF" : "#172554",
                },
              ]}
            >
              No Events Found
            </Text>

            <Text style={[styles.emptyText, { color: colors.muted }]}>
              There are no events available in this category.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 28,
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

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
  },

  filterTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 12,
  },

  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
    marginBottom: 13,
  },

  filterButton: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 18,
  },

  filterButtonPressed: {
    opacity: 0.7,
  },

  filterText: {
    fontSize: 12,
    fontWeight: "700",
  },

  resultRow: {
    marginBottom: 12,
  },

  resultText: {
    fontSize: 12,
    fontWeight: "600",
  },

  emptyCard: {
    borderRadius: 22,
    padding: 28,
    alignItems: "center",
    marginTop: 10,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 7,
  },

  emptyText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
});
