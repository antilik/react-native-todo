// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [textArr, setTextArr] = useState([]);
  const inputRef = useRef(null);

  const taskInputHandler = (text) => {
    setNewTask(text);
  }

  const addNewItemToList = () => {
    setTextArr([
      ...textArr,
      newTask,
    ]);
    setNewTask('');
    inputRef.current.focus();
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          placeholder='My Goal'
          value={newTask}
          style={styles.textInput}
          onChangeText={taskInputHandler}
        />
        <Button
          title='ADD'
          onPress={addNewItemToList}/>
      </View>
      <View style={styles.containerTasks}>{textArr.map((el, i) => (
          <Text
            key={`${i}${el.slice(0, 3)}`}
            style={styles.textItem}
            onPress={() => {
              const newArr = [...textArr];
              newArr.splice(i, 1);
              setTextArr(newArr);
            }}
          >{el}</Text>
        )
      )}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    height: 40, width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  containerTasks: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'green',
  },
  textItem: {
    padding: 20,
    color: 'green',
    fontSize: 25,
  }
});
