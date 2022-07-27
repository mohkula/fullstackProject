
import {  StyleSheet, View, Pressable } from "react-native";

import Text from "./Text";

import ProgressBar from "./ProgressBar";
import { useState } from "react";
import useEditGoal from "../hooks/useEditGoal";
import theme from "../../theme";

  
const GoalCounter = (props) => {




    const [editGoal, result] = useEditGoal();


  const setProgress = async(setProgress,name) =>{

 
    
    try{
        const {data} = await editGoal({
         name,
         setProgress
        })
  
      } catch (e) {
        console.log(e);
      }
  }
    
    const [count, setCount] = useState(Number(props.progress))


const increaseCount = () => {
if(count + props.increments <= props.steps){
    setCount(count + props.increments)
    setProgress(count + props.increments, props.name)
    
}
}

const decreaseCount = () => {
    if(count - props.increments >= 0){
        setCount(count - props.increments)
        setProgress(count - props.increments, props.name)
    }
    
}


    
    
    return (
    <View style= {styles.container}>
    <View style={styles.flexColumn}>
    <Pressable style={styles.deleteCircle} onPress={() => props.removeGoal(props.id)}>
<Text color ='primary'> X </Text>


</Pressable>


<View style={styles.flexContainer}>



<Pressable style={styles.circle} 
 onPress={decreaseCount
}>
    <Text color ='primary'> - </Text>

</Pressable>

<View style={styles.flexColumn}> 

<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>


</View>


<Pressable style={styles.circle} 
 onPress={ increaseCount
 
}

>
    <Text color ='primary'> + </Text>

</Pressable>


</View>


    </View>
    </View>)
}

const styles = StyleSheet.create({
   container:{
    backgroundColor: theme.colors.primary,
    width: 400,
        height: 200,
   },
    flexContainer: {
        
        
         flexDirection: 'row',
         justifyContent: 'space-between',
         padding: 10
         
         

         
         
       },

    
    flexColumn: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',


    },

    circle: {
        width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
      },
      deleteCircle: {
        width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'red',
      }

    
   
  });

export default GoalCounter