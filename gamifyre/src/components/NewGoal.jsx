import { Formik } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";


import * as yup from "yup";
import { useApolloClient } from "@apollo/client";


import useCreateGoal from "../hooks/useCreateGoal";
import NewGoalForm from "./NewGoalForm";

const initialValues = {
  name: "",
  description: "",
  steps: "",
  increments: "",
  
};

let helper = 1

const validationSchema = yup.object().shape({
  name: yup.string().min(1).max(30).required("name is required"),
  steps: yup.number().typeError('steps must be a number')
  .positive('steps must be positive')
  .required('number of steps is required')
  .test('divisible', 'steps must be divisible by increments', 
  function(value){

    helper = value
return true   
  }),
  increments: yup.number().typeError('increments must be a number')
  .positive('increments must be positive')
  .test('divisible', 'steps must be divisible by increments', 
  function(value){

    
return helper % value === 0
  })
  .required('number of increments is required')
});

const NewGoal = () => {
const navigate = useNavigate() 
const [createGoal, result] = useCreateGoal();
const apolloClient = useApolloClient()
    const onSubmit = async (values) => {
      

      let { name, description, steps, increments } = values;
      steps = Number(steps)
      increments = Number(increments)
try{
      const {data} = await createGoal({
        name, 
        description,
         steps,
        increments,
      })
      await apolloClient.resetStore()

    } catch (e) {
      console.log(e);
    }

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
