import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Event = {
  id: string;
  title: string;
  category: string;
  dateTime: string;
  venue: string;
  joined: boolean;
};

type EventCardProps = {
  event: Event;
  onPress: () => void;
};

export default function EventCard({ event, onPress }: EventCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.categoryRow}>
        <Text style={styles.category}>{event.category.toUpperCase()}</Text>

        <View
          style={[
            styles.status,
            event.joined ? styles.joinedStatus : styles.availableStatus,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              event.joined ? styles.joinedText : styles.availableText,
            ]}
          >
            {event.joined ? "JOINED" : "AVAILABLE"}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{event.title}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>DATE & TIME</Text>

        <Text style={styles.infoText}>{event.dateTime}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>VENUE</Text>

        <Text style={styles.infoText}>{event.venue}</Text>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.viewDetails}>View Details</Text>

        <Text style={styles.arrow}>→</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    marginBottom: 14,
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  category: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
    color: "#2563EB",
  },

  status: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 10,
  },

  availableStatus: {
    backgroundColor: "#EFF6FF",
  },

  joinedStatus: {
    backgroundColor: "#DBEAFE",
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  availableText: {
    color: "#2563EB",
  },

  joinedText: {
    color: "#1D4ED8",
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172554",
    lineHeight: 25,
    marginBottom: 16,
  },

  infoContainer: {
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#64748B",
    marginBottom: 3,
  },

  infoText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 19,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    marginTop: 6,
    paddingTop: 13,
  },

  viewDetails: {
    fontSize: 12,
    fontWeight: "800",
    color: "#2563EB",
  },

  arrow: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2563EB",
  },
});
