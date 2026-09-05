import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JE</Text>
        </View>

        <Text style={styles.greeting}>Hello, Im</Text>

        <Text style={styles.name}>Jhonrhane Elarcosa</Text>

        <Text style={styles.role}>Information Technology Student</Text>

        <Text style={styles.introduction}>
          Im passionate about technology, programming, and creating useful
          applications. I enjoy learning new things and turning ideas into
          working projects.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👋 About Me</Text>

        <Text style={styles.cardText}>
          Im an Information Technology student who enjoys exploring software
          development and learning how technology can solve real-world problems.
          Im currently improving my programming skills through different
          projects and activities.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓 Education</Text>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Text>📚</Text>
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Information Technology</Text>

            <Text style={styles.infoSubtitle}>College Student</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  content: {
    paddingBottom: 30,
  },

  header: {
    backgroundColor: "#172554",
    paddingTop: 65,
    paddingBottom: 35,
    paddingHorizontal: 25,
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: "#60A5FA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  greeting: {
    fontSize: 16,
    color: "#BFDBFE",
  },

  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 4,
    textAlign: "center",
  },

  role: {
    fontSize: 14,
    color: "#DBEAFE",
    marginTop: 7,
    textAlign: "center",
  },

  introduction: {
    fontSize: 14,
    lineHeight: 21,
    color: "#E0E7FF",
    textAlign: "center",
    marginTop: 18,
    maxWidth: 340,
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 18,
    marginTop: 18,
    padding: 20,
    borderRadius: 20,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#172554",
    marginBottom: 12,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },

  infoContent: {
    marginLeft: 14,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
  },

  infoSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 3,
  },
});
