
import {  StyleSheet, View, Pressable } from "react-native";


import { useState } from "react";

import Text from "./Text";
import theme from "../../theme";
import ProgressBar from "./ProgressBar";
import useEditGoal from "../hooks/useEditGoal";
import EditGoal from "./editGoal";
import EditGoalModal from "./editGoalModal";
  
const GoalCounter = (props) => {


    const [showModal, setShowModal] = useState(false)

    const [editGoal, result] = useEditGoal();


  const setProgress = async(setProgress,name) =>{

 
    
    try{
        const {data} = await editGoal({
            variables: {
                id: props.id,
                name: name,
                setProgress: setProgress
            }
        })
  
      } catch (e) {
        console.log(e);
      }
  }
    
    const [count, setCount] = useState(Number(props.progress))


const increaseCount = (increase) => {
   

if(count + increase <= props.steps){
    setCount(count  + increase)
    setProgress(count + increase, props.name)
    
}

else{setCount(props.steps)
    setProgress(props.steps, props.name)
}

}

const decreaseCount = (decrease) => {
    if(count - decrease >= 0){
        setCount(count - decrease)
        setProgress(count - decrease, props.name)
    }
    else{
        setCount(0)
        setProgress(0, props.name)
    }
    
}



const deleteButton = () => {

    return (
        <Pressable style={styles.deleteCircle} onPress={() => props.removeGoal(props.id)}>
        <Text color ='primary'> X </Text>
        
        
        </Pressable>
    )
}


    
    
    return (
    <View style= {styles.container}>
       {showModal ? <EditGoalModal setShowModal = {setShowModal} refetchGoals = {props.refetchGoals} id = {props.id} 
       name={props.name} description = {props.description} steps = {props.steps}
       increments={props.increments}/> : 
       null }
    <View style={styles.flexColumn}>
  

    {deleteButton()}

<View style={styles.flexContainer}>


<Pressable style={styles.circle} 
 onPress={ () => decreaseCount(props.increments)
}>
    <Text color ='primary'> - </Text>

</Pressable>


<View style={styles.flexColumn}> 
<Pressable onPress={() => setShowModal(true)}>
    
<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>
</Pressable>

</View>


<Pressable style={styles.circle} 
 onPress={ () => increaseCount(props.increments)
 
}
onLongPress = {() => console.log("long press")}


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
    
   },
    flexContainer: {
        
        
         flexDirection: 'row',
         justifyContent: 'space-around',
         padding: 10
         
         

         
         
       },

    
    flexColumn: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    circle: {
        width: 70,
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderRadius: 60,
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
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      }

    
   
  });

export default GoalCounter