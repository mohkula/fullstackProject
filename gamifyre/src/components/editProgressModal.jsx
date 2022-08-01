import { StyleSheet, View, Pressable, Modal } from "react-native";
import Text from "./Text";


import * as yup from 'yup';
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";


const validationSchema = yup.object().shape({
    value: yup
      .number().typeError('value must be a number')
      .required('value is required'),
    
  });


  const initialValues = {
  value: ''
  }

const EditProgressModal = (props) => {



    const onSubmit = async (value) => {
      value = Number(value.value)
      if(props.negative){
        
        value = -value
      }
    props.changeCount(value)
   props.setNegative(false)
   props.setShowModal2(false)
      }



    return (

        <Modal
    animationType="fade"
    transparent={true}
    visible={true}
    onRequestClose={() => {
      console.log("close")
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>

<Text color='primary'> Edit value of {props.name} </Text>
<Text color='primary'> value =  value {props.negative ? '-' : '+'} ? </Text>


<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
>
      {({ handleSubmit }) => { return(
        <View >
   <FormikTextInput  style = {styles.container} name='value' placeholder=""/>
   <Pressable style={styles.continer} onPress={handleSubmit}>
     <Text style={{ textAlign: 'center'}} color="primary" fontWeight='bold' fontSize="body">Edit</Text>
   </Pressable>

   </View>
      )
      }
      }
    </Formik>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => props.setShowModal2(false)}
         
        >
          <Text color = 'primary'>cancel</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
 
    )
}




const styles = StyleSheet.create({

       container: {
        backgroundColor: 'grey'
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

   export default EditProgressModal