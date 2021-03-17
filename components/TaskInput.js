import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

import { BTN_ADD, BTN_CANCEL, INPUT_PLACEHOLDER } from "../constants/TextNames";

const TaskInput = ({setTasksListArr,isVisible, setIsVisible}) => {
  const [newTask, setNewTask] = useState("");

  const inputHandler = (enteredText) => {
    setNewTask(enteredText);
  };
  const closeModal = () => {
    setIsVisible(false);
  }
  const addNewItemToList = () => {
    setTasksListArr((prevTasksArr) => [...prevTasksArr, {
      id: Date.now().toString() + Math.random().toString(),
      value: newTask,
      isFinished: false,
    }]);
    setNewTask("");
    closeModal();
  };

  return (
    <Modal
    visible={isVisible}
    animationType='fade'
    >
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={INPUT_PLACEHOLDER}
        value={newTask}
        style={styles.textInput}
        onChangeText={inputHandler}
      />
      <View
      style={styles.btnContainer}
      >
      <Button
        title={BTN_ADD}
        onPress={addNewItemToList}
        color={'green'}
      />
      <Button
        title={BTN_CANCEL}
        onPress={closeModal}
        color={'red'}
      />

      </View>

    </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 120,
    height: '70%',
  },
  textInput: {
    height: 40,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  }
})

export default TaskInput;
