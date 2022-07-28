import { useState } from "react";
import {Alert,  StyleSheet, View, Pressable, Modal } from "react-native";
import Text from "./Text";
import EditGoal from "./editGoal";


const EditGoalModal = (props) => {

    const [showModal, setShowModal] = useState(false)


    return (

        <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

<EditGoal refetchGoals = {props.refetchGoals} close  = {() => {setShowModal(false)
}
}id = {props.id} name = {props.name} description = {props.description} 
steps = {String(props.steps)} increments= {String(props.increments)}/>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(false)}
             
            >
              <Text color = 'primary'>cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}




const styles = StyleSheet.create({

       
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

   export default EditGoalModal