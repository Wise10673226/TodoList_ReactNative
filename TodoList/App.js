import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Styles, Keyboard, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

 
  return (
    <View style={styles.container}>
  <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Today's tasks</Text>
  </View>
 
 <View style={styles.items}>
  {
    taskItems.map((item, index) => { 

      return ( <TouchableOpacity key={index} onPress ={() => completeTask(index)}>
         <Task text= {item}/>  
       
  
        
        
         </TouchableOpacity>)
      
    })
  }
 


 </View>

 <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding " : "height"}
style= {styles.writeTaskWrapper}>

<TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text => setTask()}/>
<TouchableOpacity onPress={()=> handleAddTask ()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>
+
    </Text>

  </View>
</TouchableOpacity>

 </KeyboardAvoidingView> 



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',

  },
  tasksWrapper: {
    paddingTop: 88,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 5
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },

  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0'

  },
  addText:{

  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: 'white',
   
  }
});
