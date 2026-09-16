import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  label: string;
  value: string | number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topLine} />

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 115,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  topLine: {
    width: 32,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#2563EB",
    marginBottom: 12,
  },

  value: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172554",
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
    marginTop: 3,
  },
});
