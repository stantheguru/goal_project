import React, {useState} from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, TextInput, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);



  

  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals=>[...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setAddMode(false)
  };
  

  const removeGoalHandler=(goalId)=>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=>
      goal.key !==goalId);
    });
  }

  const cancelGoalAdditionHandler=()=>{
    setAddMode(false);
}


  return (
    
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={()=>setAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>

      <View>
      <FlatList 
      keyExtractor={(item, index) =>item.key}
      data={courseGoals} renderItem={
        itemData => (
          <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />

         )
  }
        
        
      />
       
         
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    
  },
  

  

  
});
