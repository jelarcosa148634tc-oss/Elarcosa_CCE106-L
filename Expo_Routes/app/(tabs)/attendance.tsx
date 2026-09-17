import { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Student = {
  id: number;
  name: string;
  status: "Present" | "Absent" | "Not Marked";
};

const initialStudents: Student[] = [
  { id: 1, name: "Juan Dela Cruz", status: "Not Marked" },
  { id: 2, name: "Maria Santos", status: "Not Marked" },
  { id: 3, name: "John Smith", status: "Not Marked" },
  { id: 4, name: "Ana Reyes", status: "Not Marked" },
  { id: 5, name: "Mark Garcia", status: "Not Marked" },
  { id: 6, name: "Sofia Lopez", status: "Not Marked" },
  { id: 7, name: "Daniel Cruz", status: "Not Marked" },
  { id: 8, name: "Angela Torres", status: "Not Marked" },
  { id: 9, name: "Kevin Ramos", status: "Not Marked" },
  { id: 10, name: "Nicole Flores", status: "Not Marked" },
  { id: 11, name: "Michael Tan", status: "Not Marked" },
  { id: 12, name: "Ashley Lim", status: "Not Marked" },
  { id: 13, name: "Ryan Mendoza", status: "Not Marked" },
  { id: 14, name: "Camille Navarro", status: "Not Marked" },
  { id: 15, name: "Joshua Aquino", status: "Not Marked" },
];

export default function AttendanceScreen() {
  const { darkMode } = useTheme();

  const [students, setStudents] =
    useState<Student[]>(initialStudents);

  const [message, setMessage] =
    useState("Attendance is ready.");

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const markedCount = presentCount + absentCount;

  const remainingCount =
    students.length - markedCount;

  useEffect(() => {
    setMessage(
      `${markedCount} of ${students.length} students marked`
    );
  }, [markedCount, students.length]);

  const updateAttendance = (
    id: number,
    status: "Present" | "Absent"
  ) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? "#0F172A"
            : "#FFFFFF",
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <View style={styles.headerTextContainer}>

            <Text
              style={[
                styles.smallTitle,
                {
                  color: darkMode
                    ? "#60A5FA"
                    : "#2563EB",
                },
              ]}
            >
              STUDENT RECORD
            </Text>

            <Text
              style={[
                styles.title,
                {
                  color: darkMode
                    ? "#FFFFFF"
                    : "#172554",
                },
              ]}
            >
              Attendance
            </Text>

            <Text
              style={[
                styles.subtitle,
                {
                  color: darkMode
                    ? "#94A3B8"
                    : "#64748B",
                },
              ]}
            >
              Track today's student attendance
            </Text>

          </View>

          <View
            style={[
              styles.headerIcon,
              {
                backgroundColor: darkMode
                  ? "#1E3A5F"
                  : "#DBEAFE",
              },
            ]}
          >
            <Text
              style={[
                styles.headerIconText,
                {
                  color: darkMode
                    ? "#60A5FA"
                    : "#2563EB",
                },
              ]}
            >
              ✓
            </Text>
          </View>

        </View>

        {/* ================= SUMMARY CARD ================= */}

        <View
          style={[
            styles.summaryCard,
            {
              backgroundColor: darkMode
                ? "#1E293B"
                : "#172554",
            },
          ]}
        >

          <View style={styles.summaryHeader}>

            <View style={styles.summaryTextContainer}>

              <Text style={styles.summaryTitle}>
                Attendance Summary
              </Text>

              <Text
                style={[
                  styles.summaryMessage,
                  {
                    color: darkMode
                      ? "#CBD5E1"
                      : "#BFDBFE",
                  },
                ]}
              >
                {message}
              </Text>

            </View>

            <View style={styles.totalCircle}>

              <Text style={styles.totalNumber}>
                {students.length}
              </Text>

              <Text style={styles.totalLabel}>
                TOTAL
              </Text>

            </View>

          </View>

          <View
            style={[
              styles.summaryDivider,
              {
                backgroundColor: darkMode
                  ? "#334155"
                  : "#334477",
              },
            ]}
          />

          {/* ================= STATISTICS ================= */}

          <View style={styles.statsRow}>

            {/* PRESENT */}

            <View style={styles.statItem}>

              <View
                style={[
                  styles.statIcon,
                  styles.presentIcon,
                ]}
              >
                <Text style={styles.statIconText}>
                  ✓
                </Text>
              </View>

              <View>

                <Text style={styles.statNumber}>
                  {presentCount}
                </Text>

                <Text
                  style={[
                    styles.statLabel,
                    {
                      color: darkMode
                        ? "#94A3B8"
                        : "#CBD5E1",
                    },
                  ]}
                >
                  Present
                </Text>

              </View>

            </View>

            {/* ABSENT */}

            <View style={styles.statItem}>

              <View
                style={[
                  styles.statIcon,
                  styles.absentIcon,
                ]}
              >
                <Text style={styles.statIconText}>
                  ×
                </Text>
              </View>

              <View>

                <Text style={styles.statNumber}>
                  {absentCount}
                </Text>

                <Text
                  style={[
                    styles.statLabel,
                    {
                      color: darkMode
                        ? "#94A3B8"
                        : "#CBD5E1",
                    },
                  ]}
                >
                  Absent
                </Text>

              </View>

            </View>

            {/* REMAINING */}

            <View style={styles.statItem}>

              <View
                style={[
                  styles.statIcon,
                  styles.remainingIcon,
                ]}
              >
                <Text style={styles.statIconText}>
                  •
                </Text>
              </View>

              <View>

                <Text style={styles.statNumber}>
                  {remainingCount}
                </Text>

                <Text
                  style={[
                    styles.statLabel,
                    {
                      color: darkMode
                        ? "#94A3B8"
                        : "#CBD5E1",
                    },
                  ]}
                >
                  Remaining
                </Text>

              </View>

            </View>

          </View>

        </View>

        {/* ================= STUDENT LIST HEADER ================= */}

        <View style={styles.sectionHeader}>

          <View>

            <Text
              style={[
                styles.sectionTitle,
                {
                  color: darkMode
                    ? "#FFFFFF"
                    : "#172554",
                },
              ]}
            >
              Student List
            </Text>

            <Text
              style={[
                styles.sectionSubtitle,
                {
                  color: darkMode
                    ? "#94A3B8"
                    : "#64748B",
                },
              ]}
            >
              Mark each student as present or absent
            </Text>

          </View>

          <View
            style={[
              styles.countBadge,
              {
                backgroundColor: darkMode
                  ? "#1E3A5F"
                  : "#DBEAFE",
              },
            ]}
          >

            <Text
              style={[
                styles.countBadgeText,
                {
                  color: darkMode
                    ? "#60A5FA"
                    : "#2563EB",
                },
              ]}
            >
              {students.length}
            </Text>

          </View>

        </View>

        {/* ================= STUDENT CARDS ================= */}

        {students.map((student) => (

          <View
            key={student.id}
            style={[
              styles.studentCard,
              {
                backgroundColor: darkMode
                  ? "#1E293B"
                  : "#FFFFFF",

                borderColor: darkMode
                  ? "#334155"
                  : "#E2E8F0",
              },
            ]}
          >

            {/* STUDENT INFORMATION */}

            <View style={styles.studentTop}>

              <View
                style={[
                  styles.numberCircle,
                  {
                    backgroundColor: darkMode
                      ? "#172554"
                      : "#EFF6FF",
                  },
                ]}
              >

                <Text
                  style={[
                    styles.numberText,
                    {
                      color: darkMode
                        ? "#60A5FA"
                        : "#2563EB",
                    },
                  ]}
                >
                  {String(student.id).padStart(2, "0")}
                </Text>

              </View>

              <View style={styles.studentInfo}>

                <Text
                  style={[
                    styles.studentName,
                    {
                      color: darkMode
                        ? "#FFFFFF"
                        : "#1E293B",
                    },
                  ]}
                >
                  {student.name}
                </Text>

                <View style={styles.statusRow}>

                  <View
                    style={[
                      styles.statusDot,

                      student.status === "Present" &&
                        styles.presentDot,

                      student.status === "Absent" &&
                        styles.absentDot,
                    ]}
                  />

                  <Text
                    style={[
                      styles.statusText,
                      {
                        color:
                          student.status === "Present"
                            ? "#16A34A"
                            : student.status === "Absent"
                            ? "#DC2626"
                            : darkMode
                            ? "#94A3B8"
                            : "#64748B",
                      },
                    ]}
                  >
                    {student.status}
                  </Text>

                </View>

              </View>

            </View>

            {/* ================= BUTTONS ================= */}

            <View style={styles.buttonRow}>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.attendanceButton,
                  styles.presentButton,

                  student.status === "Present" &&
                    styles.presentSelected,
                ]}
                onPress={() =>
                  updateAttendance(
                    student.id,
                    "Present"
                  )
                }
              >

                <Text style={styles.buttonIcon}>
                  ✓
                </Text>

                <Text style={styles.buttonText}>
                  Present
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.attendanceButton,
                  styles.absentButton,

                  student.status === "Absent" &&
                    styles.absentSelected,
                ]}
                onPress={() =>
                  updateAttendance(
                    student.id,
                    "Absent"
                  )
                }
              >

                <Text style={styles.buttonIcon}>
                  ×
                </Text>

                <Text style={styles.buttonText}>
                  Absent
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        ))}

        {/* ================= FOOTER ================= */}

        <View style={styles.footer}>

          <View
            style={[
              styles.footerLine,
              {
                backgroundColor: darkMode
                  ? "#334155"
                  : "#E2E8F0",
              },
            ]}
          />

          <Text
            style={[
              styles.footerText,
              {
                color: darkMode
                  ? "#64748B"
                  : "#94A3B8",
              },
            ]}
          >
            Attendance updates automatically
          </Text>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // =====================================================
  // MAIN SCREEN
  // =====================================================

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  headerTextContainer: {
    flex: 1,
  },

  smallTitle: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginBottom: 4,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  headerIconText: {
    fontSize: 26,
    fontWeight: "800",
  },

  // =====================================================
  // SUMMARY CARD
  // =====================================================

  summaryCard: {
    borderRadius: 22,
    padding: 20,
    marginBottom: 28,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryTextContainer: {
    flex: 1,
    paddingRight: 12,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  summaryMessage: {
    fontSize: 13,
    marginTop: 5,
  },

  totalCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  totalNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  totalLabel: {
    fontSize: 7,
    fontWeight: "800",
    color: "#DBEAFE",
    marginTop: 1,
  },

  summaryDivider: {
    height: 1,
    marginVertical: 18,
  },

  // =====================================================
  // STATISTICS
  // =====================================================

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  presentIcon: {
    backgroundColor: "#15803D",
  },

  absentIcon: {
    backgroundColor: "#B91C1C",
  },

  remainingIcon: {
    backgroundColor: "#475569",
  },

  statIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  statLabel: {
    fontSize: 10,
    marginTop: 1,
  },

  // =====================================================
  // STUDENT LIST HEADER
  // =====================================================

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
  },

  sectionSubtitle: {
    fontSize: 12,
    marginTop: 3,
  },

  countBadge: {
    minWidth: 36,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  countBadgeText: {
    fontSize: 13,
    fontWeight: "800",
  },

  // =====================================================
  // STUDENT CARD
  // =====================================================

  studentCard: {
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,

    borderWidth: 1,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  studentTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  numberCircle: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  numberText: {
    fontSize: 13,
    fontWeight: "800",
  },

  studentInfo: {
    flex: 1,
  },

  studentName: {
    fontSize: 16,
    fontWeight: "700",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#94A3B8",
    marginRight: 6,
  },

  presentDot: {
    backgroundColor: "#16A34A",
  },

  absentDot: {
    backgroundColor: "#DC2626",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  // =====================================================
  // BUTTONS
  // =====================================================

  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },

  attendanceButton: {
    flex: 1,
    height: 44,
    borderRadius: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  presentButton: {
    backgroundColor: "#16A34A",
  },

  absentButton: {
    backgroundColor: "#DC2626",
  },

  presentSelected: {
    backgroundColor: "#15803D",
    borderWidth: 2,
    borderColor: "#86EFAC",
  },

  absentSelected: {
    backgroundColor: "#B91C1C",
    borderWidth: 2,
    borderColor: "#FCA5A5",
  },

  buttonIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginRight: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  // =====================================================
  // FOOTER
  // =====================================================

  footer: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  footerLine: {
    width: 40,
    height: 3,
    borderRadius: 2,
    marginBottom: 10,
  },

  footerText: {
    fontSize: 11,
  },

});