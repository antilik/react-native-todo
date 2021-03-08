import React, {
  useState,
} from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import TaskInput from "./components/TaskInput";
import TaskSummaryInfo from "./components/TaskSummaryInfo";
import TasksContainer from "./components/TasksContainer";

export default function App() {
  const [tasksListArr, setTasksListArr] = useState([]);

  return (
    <View style={styles.mainContainer}>
      <TaskInput
        setTasksListArr={setTasksListArr}
      />
      <TasksContainer
        tasksListArr={tasksListArr}
        setTasksListArr={setTasksListArr}
      />
      <TaskSummaryInfo
        tasksListArr={tasksListArr}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(245,245,245)',
    padding: 5,
  },
});
