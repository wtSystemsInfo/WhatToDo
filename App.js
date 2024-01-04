import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './syles';
import Task from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
 
  const handleAddTask = () => {
    if(task != null){
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
    
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/*The beginning of app */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>What's to do ?</Text>

          <View style={styles.toDoItems}>
          {/*Here is where the items will be set */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text = {item} />  
                  </TouchableOpacity>
                )               
              })

            }
            
          </View>
      </View>

      {/*Create a task*/}
      <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTask}>
        <TextInput style = {styles.input} placeholder={'Task'} value={task} onChangeText={ text => setTask(text)} />

        <TouchableOpacity onPress={() => {handleAddTask(); Keyboard.dismiss();}}>
          <View style = {styles.addBtn}>
            <Text style = {styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

