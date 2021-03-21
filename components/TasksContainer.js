import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import TaskItem from './TaskItem';

const TasksContainer = ({ tasksListArr, setTasksListArr }) => {
  return (
    <View style={styles.containersTasks}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={tasksListArr}
        renderItem={({ item }) => (
          <TaskItem
            taskData={item}
            tasksListArr={tasksListArr}
            setTasksListArr={setTasksListArr}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containersTasks: {
    marginTop: 20,
    width: '100%',
    height: '81%',
    minHeight: 550,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default TasksContainer;
