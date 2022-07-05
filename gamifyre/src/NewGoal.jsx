import NewGoalForm from "./components/NewGoalForm";
import { Formik } from "formik";
import { View } from "react-native";

import * as yup from "yup";


const initialValues = {
  password: "",
  username: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], 'Passwords must match')
    .required("Password Confirmation is required"),
});

const NewGoal = () => {
 
  
    const onSubmit = async () => {
    console.log("form submitted")
    };
  
    return (
      <View >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <NewGoalForm onSubmit={handleSubmit} />}
        </Formik>
      </View>
    );
  };
  
  export default NewGoal;
