import NewGoalForm from "./components/NewGoalForm";
import { Formik } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import * as yup from "yup";
import GoalCounter from "./components/GoalCounter";


const initialValues = {
  name: "",
  description: "",
  steps: 0,
  increments: 0
};

const validationSchema = yup.object().shape({
  name: yup.string().min(1).max(30).required("name is required"),
  steps: yup.number().typeError('steps must be a number')
  .positive('steps must be positive')
  .required('number of steps is required'),
  increments: yup.number().typeError('increments must be a number')
  .positive('increments must be positive')
  .required('number of increments is required')
});

const NewGoal = () => {
const navigate = useNavigate() 
  
    const onSubmit = (values) => {
      console.log(values)
      navigate('/')
          
      
    };
  
    return (
      
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <NewGoalForm onSubmit={handleSubmit} />}
        </Formik>
      
    );
  };
  
  export default NewGoal;
