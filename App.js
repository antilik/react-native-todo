import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import TaskInput from './components/TaskInput';
import TaskSummaryInfo from './components/TaskSummaryInfo';
import TasksContainer from './components/TasksContainer';

export default function App() {
  const [tasksListArr, setTasksListArr] = useState([]);
  const [isShownModalAddTask, setIsShownModalAddTask] = useState(false);

  const closeModal = () => {
    setIsShownModalAddTask(false);
  };

  return (
    <View style={styles.mainContainer}>
      <TaskInput
        setTasksListArr={setTasksListArr}
        isVisible={isShownModalAddTask}
        setIsNotVisible={closeModal}
      />
      <TasksContainer
        tasksListArr={tasksListArr}
        setTasksListArr={setTasksListArr}
      />
      <View style={styles.btnModalIsShown}>
        <Button
          title="Add New Goal"
          onPress={setIsShownModalAddTask.bind(this, true)}
        />
      </View>
      <TaskSummaryInfo tasksListArr={tasksListArr} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 25,
    paddingHorizontal: 5,
  },
  btnModalIsShown: {
    marginBottom: 16,
  },
});
