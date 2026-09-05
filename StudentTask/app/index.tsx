import React, { useState } from "react";
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Task = {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
};

export default function App() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Study React Native",
      dueDate: "September 5, 2026",
      completed: false,
    },
    {
      id: "2",
      title: "Finish project documentation",
      dueDate: "September 7, 2026",
      completed: true,
    },
  ]);

  const addTask = () => {
    if (taskTitle.trim() === "" || dueDate.trim() === "") {
      Alert.alert(
        "Missing Information",
        "Please enter a task title and due date."
      );
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      dueDate: dueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskTitle("");
    setDueDate("");

    Alert.alert("Success", "Task added successfully!");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );

    Alert.alert("Updated", "Task status changed.");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));

    Alert.alert("Deleted", "Task has been deleted.");
  };

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskInfo}>
        <Text
          style={[
            styles.taskTitle,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </Text>

        <Text style={styles.dueDate}>
          Due: {item.dueDate}
        </Text>

        <Text
          style={[
            styles.status,
            item.completed
              ? styles.completedStatus
              : styles.pendingStatus,
          ]}
        >
          {item.completed ? "✓ Completed" : "• Pending"}
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => toggleTask(item.id)}
        >
          <Text style={styles.buttonText}>
            {item.completed ? "Undo" : "Done"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Student Task Manager
              </Text>

              <Text style={styles.headerSubtitle}>
                Stay organized and manage your tasks
              </Text>
            </View>

            <View style={styles.studentCard}>
              <Text style={styles.studentName}>
                Jhonrhane Elarcosa
              </Text>

              <Text style={styles.program}>
                Bachelor of Science in Information Technology
              </Text>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  {pendingTasks}
                </Text>
                <Text style={styles.statLabel}>Pending</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  {completedTasks}
                </Text>
                <Text style={styles.statLabel}>Completed</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>
                  {tasks.length}
                </Text>
                <Text style={styles.statLabel}>Total</Text>
              </View>
            </View>

            <View style={styles.form}>
              <Text style={styles.sectionTitle}>
                Add New Task
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter task title"
                value={taskTitle}
                onChangeText={setTaskTitle}
              />

              <TextInput
                style={styles.input}
                placeholder="Enter due date"
                value={dueDate}
                onChangeText={setDueDate}
              />

              <TouchableOpacity
                style={styles.addButton}
                onPress={addTask}
              >
                <Text style={styles.addButtonText}>
                  + Add Task
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>
              My Tasks
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  list: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },

  studentCard: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  studentName: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  program: {
    fontSize: 13,
    color: "#DBEAFE",
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statBox: {
    backgroundColor: "#FFFFFF",
    width: "31%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },

  statNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2563EB",
  },

  statLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 3,
  },

  form: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 13,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#F8FAFC",
  },

  addButton: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  taskCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },

  taskInfo: {
    marginBottom: 12,
  },

  taskTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E293B",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },

  dueDate: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 5,
  },

  status: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 6,
  },

  pendingStatus: {
    color: "#F59E0B",
  },

  completedStatus: {
    color: "#16A34A",
  },

  buttons: {
    flexDirection: "row",
    gap: 8,
  },

  completeButton: {
    backgroundColor: "#16A34A",
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  deleteButton: {
    backgroundColor: "#DC2626",
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});