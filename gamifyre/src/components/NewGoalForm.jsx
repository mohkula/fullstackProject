import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../../theme";



const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      borderRadius: 6,
      margin: 10,
    },

    box: {
      backgroundColor: 'black',
      padding: 7,
      borderRadius: 3,
      margin: 5,
    },

    
   
  });

const NewGoalForm = ({ onSubmit, submitButton }) => {
  return (

    <View style={styles.container}>
      <FormikTextInput name="name" placeholder="Name of the goal" />
      <FormikTextInput name="description" placeholder="Description of the goal" />
      <FormikTextInput
        name="steps"
        placeholder="number of steps"
      />
      
      <FormikTextInput name="increments" placeholder="number of increments per press" />
      <View style= {styles.box}>

      <Pressable style={styles.container} onPress={onSubmit}>
        <Text
          style={{ textAlign: "center" }}
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          >
            {submitButton ? submitButton : "Create a goal"}
          
        </Text>
      </Pressable>
          </View>
    </View>
  );
};

export default NewGoalForm;

