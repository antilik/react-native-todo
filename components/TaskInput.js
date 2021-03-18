import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

import { BTN_ADD, BTN_CANCEL, INPUT_PLACEHOLDER } from '../constants/TextNames';

const TaskInput = ({ setTasksListArr, isVisible, setIsNotVisible }) => {
  const [newTask, setNewTask] = useState('');

  const inputHandler = (enteredText) => {
    setNewTask(enteredText);
  };

  const addNewItemToList = () => {
    setTasksListArr((prevTasksArr) => [
      ...prevTasksArr,
      {
        id: Date.now().toString() + Math.random().toString(),
        value: newTask,
        isFinished: false,
      },
    ]);
    setNewTask('');
    setIsNotVisible();
  };

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={INPUT_PLACEHOLDER}
          value={newTask}
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title={BTN_ADD} onPress={addNewItemToList} color="green" />
          </View>
          <View style={styles.button}>
            <Button title={BTN_CANCEL} onPress={setIsNotVisible} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    flex: 1,
  },
  textInput: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
  button: {
    width: 90,
  },
});

export default TaskInput;
