
import {  StyleSheet, View, Pressable } from "react-native";


import { useState } from "react";

import Text from "./Text";
import theme from "../../theme";
import ProgressBar from "./ProgressBar";
import useEditGoal from "../hooks/useEditGoal";
import EditGoalModal from "./editGoalModal";
import EditProgressModal from "./editProgressModal"
const GoalCounter = (props) => {




 const [negative, setNegative] = useState(false)


    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [editGoal, result] = useEditGoal();


  const setProgress = async(setProgress,name) =>{

 
    
    try{
            // eslint-disable-next-line no-unused-vars
        const {data} = await editGoal({
            variables: {
                id: props.id,
                name: name,
                setProgress: setProgress,
                date: true
            }
        })
  
      } catch (e) {
        
        console.log(e);
      }
    
  }
    
    const [count, setCount] = useState(Number(props.progress))


const changeCount = (value) => {

  if(value >= 0){
    if(count + value <= props.steps){
      setCount(count  + value)
      setProgress(count + value, props.name)
      
  }
  else{
    setCount(props.steps)
    setProgress(props.steps, props.name)
  }
  }
  else{
    if(count + value >= 0){
      setCount(count  + value)
      setProgress(count + value, props.name)

    }
    else{
      setCount(0)
      setProgress(0, props.name)
    }
  }
   





}



const deleteButton = () => {

    return (
        <Pressable style={styles.deleteCircle} onPress={() => props.removeGoal(props.id)}>
        <Text color ='primary'> X </Text>
        
        
        </Pressable>
    )
}

const modalView = () => {

return (
  <EditGoalModal setShowModal = {setShowModal} refetchGoals = {props.refetchGoals} id = {props.id} 
       name={props.name} description = {props.description} steps = {props.steps}
       increments={props.increments}/>
)
}

const modal2View = () => {


  return (
   <View style={styles.container}>
<EditProgressModal name={props.name} setShowModal2={setShowModal2} 
changeCount = {changeCount}  negative ={negative} setNegative={setNegative}/>
</View>
  )
}


    
    
    return (
    <View style= {styles.container}>
       {showModal ? modalView() : 
       null }
    <View style={styles.flexColumn}>
  

    {deleteButton()}

<View style={styles.flexContainer}>



<Pressable style={styles.circle} 
 onPress={ () => changeCount(-props.increments)
}
onLongPress = { () => {
  setNegative(true)
  setShowModal2(true)
  }
}

>
    <Text color ='primary'> - </Text>

</Pressable>


<View style={styles.flexColumn}> 
<Pressable onPress={() => setShowModal(true)}>
  
    
    
<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>

<Text color='primary'>{(Date(props.lastEdited))
  }</Text>

</Pressable>

</View>
{showModal2 ? modal2View() : null}

<Pressable style={styles.circle} 
 onPress={ () => changeCount(props.increments)
 
}
onLongPress = { () => {
  
setShowModal2(true)
}
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