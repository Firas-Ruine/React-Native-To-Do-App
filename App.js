import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import React , {useState} from 'react';
export default function App() {
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => 
    {
      Keyboard.dismiss(); 
        setTaskItems([...taskItems, task])
        setTask(null);
    }
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }
  return (
    <View style={styles.container}>
      {/*Today's Tasks*/}

      <View style={styles.taskswrapper}>
        <Text style={styles.sectionTitle}>
          Today's Tasks
        </Text>
        <View style={styles.items}>
          {/*This is where the tasks will go*/}
          {
            taskItems.map((item,index)=>{
             return  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
             <Task text={item} /> 
           </TouchableOpacity>
            })
          }
          
        </View>
      </View>
          {/*Write a task*/}
          <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.writeTaskWrapper}>
           <TextInput style={styles.input} value={task} placeholder={"Write a Task"} onChangeText={text => setTask(text)}>
               
           </TextInput>
           <TouchableOpacity onPress={()=> handleAddTask()}>
            <View style={styles.addWrapper}>
             <Text style={styles.addText}>+</Text>
            </View>
           </TouchableOpacity>
         </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskswrapper:{
    paddingTop:50,
    paddingHorizontal:20
  },
  sectionTitle:{
     fontSize:24,
     fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:
  {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  input:
  {
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor: '#fff',
    borderRadius:60,
    borderColor: '#ff8300',
    borderWidth:1,

  },
  addText:
  {

  },
  addWrapper:
  {
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#ff8300',
  borderWidth:1,

  },
});
