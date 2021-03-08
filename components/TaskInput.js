import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet } from "react-native";

import { BTN_ADD, INPUT_PLACEHOLDER } from "../constants/TextNames";

const TaskInput = ({setTasksListArr}) => {
  const [newTask, setNewTask] = useState("");

  const inputHandler = (enteredText) => {
    setNewTask(enteredText);
  };

  const addNewItemToList = () => {
    setTasksListArr((prevTasksArr) => [...prevTasksArr, {
      id: Date.now().toString() + Math.random().toString(),
      value: newTask,
      isFinished: false,
    }]);
    setNewTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={INPUT_PLACEHOLDER}
        value={newTask}
        style={styles.textInput}
        onChangeText={inputHandler}
      />
      <Button title={BTN_ADD} onPress={addNewItemToList} />
    </View>
  )
};

const styles = StyleSheet.create({
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
})

export default TaskInput;
