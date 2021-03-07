import React, { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasksArr, setTasksArr] = useState([]);
  const inputRef = useRef(null);

  const inputHandler = (enteredText) => {
    setNewTask(enteredText);
  };

  const addNewItemToList = () => {
    setTasksArr((tasksArr) => [...tasksArr, {
      id: Date.now().toString() + Math.random().toString(),
      value: newTask,
      isFinished: false,
    }]);
    setNewTask("");
    // inputRef.current.focus();
  };

  const toggleTask = (i) => {
    const getSelectedIndex = () => tasksArr.findIndex(({id}) => id === i);

    const selectedIndex = getSelectedIndex();

    setTasksArr((prevTasksArr) => [
      ...prevTasksArr.slice(0,selectedIndex),
      {...prevTasksArr[selectedIndex],
        isFinished: !prevTasksArr[selectedIndex]['isFinished']},
      ...prevTasksArr.slice(selectedIndex+1),
      ])
  };
  const deleteTask = (indexToDelete) => {
    setTasksArr((tasksArr) => tasksArr.filter(({id}) => {
      return id !== indexToDelete;
    }));
  };

  const getSumStatusOfTasks = (condition) => {
    return tasksArr.reduce((accum, elem) => ((elem['isFinished'] === condition) ? accum + 1 : accum), 0);
  }

  const getItemTask = ({item}) => (
    <View
      style={styles.containerTask}
    >
      <Text
        style={styles.textItem}
        onPress={() => toggleTask(item.id)}
      > {item.isFinished ? "+" : "-"} {item.value}</Text>
      <Text
        style={styles.deleleBtn}
        onPress={() => deleteTask(item.id)}
      >x</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          placeholder="My Goal"
          value={newTask}
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button title="ADD" onPress={addNewItemToList} />
      </View>
      <View style={styles.containersTasks}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={tasksArr}
        renderItem={getItemTask}
      />
      </View>
      {tasksArr.length
        ? (
          <View style={styles.summaryList}>
            <Text>Done:{getSumStatusOfTasks(true)}</Text>
            <Text>Not started:{getSumStatusOfTasks(false)}</Text>
          </View>
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(245,245,245)',
    padding: 5,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    height: 40,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  containersTasks: {
    marginTop: 20,
    width: '100%',
    height: '85%',
    minHeight: 550,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
  },
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
  summaryList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
  }
});
