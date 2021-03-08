import React from 'react';
import { Text, View, StyleSheet} from "react-native";

const TaskItem = ({taskData,tasksListArr, setTasksListArr }) => {

  const toggleTask = (i) => {
    const getSelectedIndex = () => tasksListArr.findIndex(({id}) => id === i);
    const selectedIndex = getSelectedIndex();

    setTasksListArr((prevTasksArr) => [
      ...prevTasksArr.slice(0,selectedIndex),
      {...prevTasksArr[selectedIndex],
        isFinished: !prevTasksArr[selectedIndex]['isFinished']},
      ...prevTasksArr.slice(selectedIndex+1),
    ])
  };

  const deleteTask = (indexToDelete) => {
    setTasksListArr((prevTasksArr) => prevTasksArr.filter(({id}) => {
      return id !== indexToDelete;
    }));
  };

  return (
    <View
      style={styles.containerTask}
    >
      <Text
        style={styles.textItem}
        onPress={toggleTask.bind(this, taskData.id)}
      > {taskData.isFinished ? "+" : "-"} {taskData.value}</Text>
      <Text
        style={styles.deleleBtn}
        onPress={deleteTask.bind(this, taskData.id)}
      >x</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  containerTask: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'rgb(245,245,245)',
  },
  textItem: {
    flex: 10,
    marginVertical: 5,
    color: "blue",
    fontSize: 20,
  },
  deleleBtn: {
    position: 'absolute',
    top: -1,
    right: 0,
    color: 'red',
    fontWeight: 'bold',
    paddingVertical: 8.6,
    paddingHorizontal: 15.5,
    borderWidth: 1,
    borderColor: 'grey',
  },
})

export default TaskItem;