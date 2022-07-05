import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../../theme";



const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
    },
   
  });

const NewGoalForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="name" placeholder="Name of the goal" />
      <FormikTextInput name="description" placeholder="Description of the goal" />
      <FormikTextInput
        name="steps"
        placeholder="number of steps"
      />
      <FormikTextInput name="increase" placeholder="number of increments per press" />
      <Pressable style={styles.signinContainer} onPress={onSubmit}>
        <Text
          style={{ textAlign: "center" }}
          color="white"
          fontWeight="bold"
          fontSize="subheading"
        >
          Create a goal
        </Text>
      </Pressable>
    </View>
  );
};

export default NewGoalForm;

