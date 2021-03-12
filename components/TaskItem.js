import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight} from "react-native";

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
      <TouchableHighlight
        underlayColor='lightgreen'
        style={styles.textContainer}
        onPress={toggleTask.bind(this, taskData.id)}
      >
      <Text
        style={styles.textItem}
      > {taskData.isFinished ? "+" : "-"} {taskData.value}</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.deleteBtnContainer}
        onPress={deleteTask.bind(this, taskData.id)}
      >
      <Text
        style={styles.deleleBtn}
      >x</Text>
    </TouchableOpacity>
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
  textContainer: {
    flex: 10,
  },
  textItem: {
    marginVertical: 5,
    color: "blue",
    fontSize: 20,
  },
  deleteBtnContainer: {
    position: 'absolute',
    top: -1,
    right: 0,
  },
  deleleBtn: {
    paddingVertical: 8.6,
    paddingHorizontal: 15.5,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'red',
  },
})

export default TaskItem;