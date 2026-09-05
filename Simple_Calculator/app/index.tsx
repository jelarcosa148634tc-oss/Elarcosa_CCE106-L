import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

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

// 1. CALCULATOR COMPONENT NA SIDE DIRIA DAPITA PAUBOS

function CalculatorScreen() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const validateInputs = () => {
    if (firstNumber.trim() === "" || secondNumber.trim() === "") {
      setMessage("Please enter both numbers.");
      setResult("");
      return false;
    }

    if (
      isNaN(Number(firstNumber)) ||
      isNaN(Number(secondNumber))
    ) {
      setMessage("Please enter valid numeric values.");
      setResult("");
      return false;
    }

    return true;
  };

  const addNumbers = () => {
    if (!validateInputs()) return;

    setResult(
      String(Number(firstNumber) + Number(secondNumber))
    );

    setMessage("");
  };

  const subtractNumbers = () => {
    if (!validateInputs()) return;

    setResult(
      String(Number(firstNumber) - Number(secondNumber))
    );

    setMessage("");
  };

  const multiplyNumbers = () => {
    if (!validateInputs()) return;

    setResult(
      String(Number(firstNumber) * Number(secondNumber))
    );

    setMessage("");
  };

  const divideNumbers = () => {
    if (!validateInputs()) return;

    const num2 = Number(secondNumber);

    if (num2 === 0) {
      setMessage("Cannot divide by zero.");
      setResult("");
      return;
    }

    setResult(
      String(Number(firstNumber) / num2)
    );

    setMessage("");
  };

  const clearCalculator = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
    setMessage("");
  };

  return (
    <View style={calcStyles.calcContainer}>
      <Text style={calcStyles.title}>
        Simple Calculator
      </Text>

      <Text style={calcStyles.subtitle}>
        Enter two numbers and choose an operation
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />

      <View style={calcStyles.buttonRow}>
        <TouchableOpacity
          style={calcStyles.operationButton}
          onPress={addNumbers}
        >
          <Text style={calcStyles.calcButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={calcStyles.operationButton}
          onPress={subtractNumbers}
        >
          <Text style={calcStyles.calcButtonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={calcStyles.operationButton}
          onPress={multiplyNumbers}
        >
          <Text style={calcStyles.calcButtonText}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={calcStyles.operationButton}
          onPress={divideNumbers}
        >
          <Text style={calcStyles.calcButtonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={calcStyles.resultBox}>
        <Text style={calcStyles.resultLabel}>
          Result
        </Text>

        <Text style={calcStyles.result}>
          {result === "" ? "—" : result}
        </Text>
      </View>

      {message !== "" && (
        <Text style={calcStyles.error}>
          {message}
        </Text>
      )}

      <TouchableOpacity
        style={calcStyles.clearButton}
        onPress={clearCalculator}
      >
        <Text style={calcStyles.clearText}>
          Clear
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// 2. MAIN APP COMPONENT NA SIDE DIRIA DAPITA PAUBOS

export default function App() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const [showDatePicker, setShowDatePicker] =
    useState(false);

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  // DATE PICKER NA SIDE DIRIA DAPITA PAUBOS

  const handleDateChange = (
    event: any,
    date?: Date
  ) => {
    setShowDatePicker(false);

    if (date) {
      setSelectedDate(date);

      const formattedDate =
        date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

      setDueDate(formattedDate);
    }
  };

  // ADD TASK NA SIDE DIRIA DAPITA PAUBOS

  const addTask = () => {
    if (
      taskTitle.trim() === "" ||
      dueDate.trim() === ""
    ) {
      Alert.alert(
        "Missing Information",
        "Please enter a task title and select a due date."
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
    setSelectedDate(new Date());

    Alert.alert(
      "Success",
      "Task added successfully!"
    );
  };

  // COMPLETE / UNDO TASK NA SIDE DIRIA DAPITA PAUBOS

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );

    Alert.alert(
      "Updated",
      "Task status changed."
    );
  };

  // DELETE TASK NA SIDE DIRIA DAPITA PAUBOS

  const deleteTask = (id: string) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );

    Alert.alert(
      "Deleted",
      "Task has been deleted."
    );
  };

  // TASK COUNTSNA SIDE DIRIA DAPITA PAUBOS

  const pendingTasks =
    tasks.filter(
      (task) => !task.completed
    ).length;

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;

  // RENDER TASK NA SIDE DIRIA DAPITA PAUBOS

  const renderTask = ({
    item,
  }: {
    item: Task;
  }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskInfo}>
        <Text
          style={[
            styles.taskTitle,
            item.completed &&
              styles.completedText,
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
          {item.completed
            ? "✓ Completed"
            : "• Pending"}
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() =>
            toggleTask(item.id)
          }
        >
          <Text style={styles.buttonText}>
            {item.completed
              ? "Undo"
              : "Done"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>
            deleteTask(item.id)
          }
        >
          <Text style={styles.buttonText}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // MAIN SCREENNA SIDE DIRIA DAPITA PAUBOS

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

              <Text
                style={styles.headerSubtitle}
              >
                Stay organized and manage
                your tasks
              </Text>
            </View>

            <View
              style={styles.studentCard}
            >
              <Text
                style={styles.studentName}
              >
                Jhonrhane Elarcosa
              </Text>

              <Text
                style={styles.program}
              >
                Bachelor of Science in
                Information Technology
              </Text>
            </View>

            <View
              style={styles.statsContainer}
            >
              <View style={styles.statBox}>
                <Text
                  style={styles.statNumber}
                >
                  {pendingTasks}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Pending
                </Text>
              </View>

              <View style={styles.statBox}>
                <Text
                  style={styles.statNumber}
                >
                  {completedTasks}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Completed
                </Text>
              </View>

              <View style={styles.statBox}>
                <Text
                  style={styles.statNumber}
                >
                  {tasks.length}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Total
                </Text>
              </View>
            </View>

            <View style={styles.form}>
              <Text
                style={styles.sectionTitle}
              >
                Add New Task
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter task title"
                value={taskTitle}
                onChangeText={setTaskTitle}
              />

              <TouchableOpacity
                style={styles.input}
                onPress={() =>
                  setShowDatePicker(true)
                }
              >
                <Text
                  style={{
                    color: dueDate
                      ? "#1E293B"
                      : "#94A3B8",
                    fontSize: 15,
                  }}
                >
                  {dueDate ||
                    "Select Date"}
                </Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={
                    handleDateChange
                  }
                />
              )}

              <TouchableOpacity
                style={styles.addButton}
                onPress={addTask}
              >
                <Text
                  style={
                    styles.addButtonText
                  }
                >
                  + Add Task
                </Text>
              </TouchableOpacity>
            </View>

            <CalculatorScreen />

            <Text
              style={styles.sectionTitle}
            >
              My Tasks
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

// 3. MAIN STYLES NA SIDE DIRIA DAPITA PAUBOS

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
    justifyContent:
      "space-between",
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
    marginBottom: 25,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 12,
    minHeight: 50,
    justifyContent: "center",
  },

  addButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  taskCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },

  taskInfo: {
    flex: 1,
    marginRight: 10,
  },

  taskTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E293B",
  },

  completedText: {
    textDecorationLine:
      "line-through",
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
    marginTop: 5,
  },

  pendingStatus: {
    color: "#F59E0B",
  },

  completedStatus: {
    color: "#16A34A",
  },

  buttons: {
    justifyContent: "center",
    gap: 6,
  },

  completeButton: {
    backgroundColor: "#16A34A",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  deleteButton: {
    backgroundColor: "#DC2626",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

// 4. CALCULATOR NA SIDE DIRIA DAPITA PAUBOS

const calcStyles = StyleSheet.create({
  calcContainer: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 25,
    elevation: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    marginTop: 3,
  },

  operationButton: {
    backgroundColor: "#2563EB",
    width: 60,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  calcButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  resultBox: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    padding: 15,
    marginTop: 18,
    alignItems: "center",
  },

  resultLabel: {
    fontSize: 13,
    color: "#64748B",
  },

  result: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 4,
  },

  error: {
    color: "#DC2626",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 12,
  },

  clearButton: {
    backgroundColor: "#64748B",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  clearText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});