import React, {useState} from 'react'
import {TextInput, Modal, StyleSheet, Button, View } from 'react-native'




const GoalInput = props=>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler= (enteredText)=>{
        setEnteredGoal(enteredText)
      };
    
    const addGoalHandler=()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');

    };

    

    return (
        <Modal animationType="slide" visible={props.visible}>
        <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler}
        placeholder="Course Goal" style={styles.input} 
        value={enteredGoal}
        />

        <View style={styles.button}>

        <View style={styles.btn}>
        <Button  title="CANCEL" color='red' onPress={props.onCancel}/>
        </View>

        <View style={styles.btn}>
        <Button title="ADD" onPress={addGoalHandler}/>
        </View>

        </View>

      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black', 
        width:'80%', 
        marginBottom:10,
        borderWidth: 1, 
        padding: 10
    
      },
      inputContainer: {
        alignItems: 'center',
        flex:1,
        justifyContent: 'center'
      },
      button:{
          flexDirection:'row',
          justifyContent:'space-around',
          width:'60%'
          
          
      },
      cancel:{
          flex:0.5
      },
      btn:{
        width:'40%'
      }

});

export default GoalInput