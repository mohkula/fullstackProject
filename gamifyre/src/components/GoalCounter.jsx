
import {Alert,  StyleSheet, View, Pressable, Modal } from "react-native";

import Text from "./Text";

import ProgressBar from "./ProgressBar";
import { useState } from "react";
import useEditGoal from "../hooks/useEditGoal";
import theme from "../../theme";
import EditGoal from "./editGoal";
import { useNavigate } from "react-router-native";
  
const GoalCounter = (props) => {



const navigate = useNavigate()
    const [editGoal, result] = useEditGoal();
const [showModal, setShowModal] = useState(false)

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



const deleteButton = () => {

    return (
        <Pressable style={styles.deleteCircle} onPress={() => props.removeGoal(props.id)}>
        <Text color ='primary'> X </Text>
        
        
        </Pressable>
    )
}


    
    
    return (
    <View style= {styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

<EditGoal refetchGoals = {props.refetchGoals} close  = {() => {setShowModal(false)
}
}id = {props.id} name = {props.name} description = {props.description} 
steps = {props.steps} increments= {props.increments}/>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(false)}
            >
              <Text color = 'primary'>cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    <View style={styles.flexColumn}>
  

    {deleteButton()}

<View style={styles.flexContainer}>


<Pressable style={styles.circle} 
 onPress={decreaseCount
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