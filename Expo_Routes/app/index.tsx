import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.smallTitle}>DASHBOARD</Text>

        <Text style={styles.title}>Hello, Jhonrhane!</Text>

        <Text style={styles.subtitle}>
          Welcome back to your personal dashboard.
        </Text>

        <View style={styles.welcomeCard}>
          <View>
            <Text style={styles.welcomeTitle}>Profile Introduction</Text>

            <Text style={styles.welcomeText}>
              Explore my profile, interests, and information through this mobile
              application.
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JE</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Overview</Text>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.icon}>🎓</Text>

            <Text style={styles.infoNumber}>BSIT</Text>

            <Text style={styles.infoLabel}>Course</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.icon}>💻</Text>

            <Text style={styles.infoNumber}>IT</Text>

            <Text style={styles.infoLabel}>Field</Text>
          </View>
        </View>

        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>About This App</Text>

          <Text style={styles.cardText}>
            This application demonstrates Expo Router navigation using Home,
            Profile, and Settings screens.
          </Text>
        </View>

        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>What I'm Learning</Text>

          <View style={styles.learningRow}>
            <Text style={styles.learningIcon}>⚛️</Text>

            <View>
              <Text style={styles.learningTitle}>React Native</Text>

              <Text style={styles.learningText}>
                Building mobile applications
              </Text>
            </View>
          </View>

          <View style={styles.learningRow}>
            <Text style={styles.learningIcon}>🧭</Text>

            <View>
              <Text style={styles.learningTitle}>Expo Router</Text>

              <Text style={styles.learningText}>
                Learning file-based navigation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  content: {
    padding: 22,
    paddingTop: 55,
    paddingBottom: 35,
  },

  smallTitle: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#2563EB",
    marginBottom: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#172554",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    lineHeight: 22,
  },

  welcomeCard: {
    backgroundColor: "#172554",
    borderRadius: 24,
    padding: 22,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  welcomeTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  welcomeText: {
    fontSize: 13,
    lineHeight: 20,
    color: "#DBEAFE",
    width: 220,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#60A5FA",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 21,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172554",
    marginTop: 28,
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    gap: 14,
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    elevation: 2,
  },

  icon: {
    fontSize: 25,
    marginBottom: 10,
  },

  infoNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172554",
  },

  infoLabel: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 3,
  },

  mainCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
  },

  learningRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  learningIcon: {
    fontSize: 25,
    marginRight: 14,
  },

  learningTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },

  learningText: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 3,
  },
});
