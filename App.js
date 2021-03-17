import React, {
  useState,
} from "react";
import {
  StyleSheet, View, Button,
} from "react-native";

import TaskInput from "./components/TaskInput";
import TaskSummaryInfo from "./components/TaskSummaryInfo";
import TasksContainer from "./components/TasksContainer";

export default function App() {
  const [tasksListArr, setTasksListArr] = useState([]);
  const [isShownModalAddTask, setIsShownModalAddTask] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <TaskInput
        setTasksListArr={setTasksListArr}
        isVisible={isShownModalAddTask}
        setIsVisible={setIsShownModalAddTask}
      />
      <TasksContainer
        tasksListArr={tasksListArr}
        setTasksListArr={setTasksListArr}
      />
      <View
        style={styles.btnModalIsShown}
      >
      <Button
        title='Add New Goal'

        onPress={setIsShownModalAddTask.bind(this,true)}
      />
      </View>
      <TaskSummaryInfo
        tasksListArr={tasksListArr}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 25,
    paddingHorizontal: 5,
  },
  btnModalIsShown: {
    marginBottom: 16,
  }
});
