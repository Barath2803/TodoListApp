import React, { useState } from 'react'
import {
  StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, Platform,
} from 'react-native';
import Task from './components/Task'

export default function App() {

  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task])
    setTask(null)
    // console.log(taskList)
  }

  const completeTask = (index) => {
    let copyList = [...taskList];
    copyList.splice(index, 1);
    setTaskList(copyList);
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.container}>

        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>

          <View style={styles.taskList}>
            {
              taskList.map((items, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={items} />
                  </TouchableOpacity>)
              })
            }
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.AddTextWrapper}>
          <TextInput style={styles.input} placeholder='Write a Text...' value={task} onChangeText={(text) => setTask(text)} />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cddccd',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 30,
  },
  AddTextWrapper: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    alignContent: 'center',
  },
  addWrapper: {
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    fontSize: 24,
  },

});
