import { Formik } from "formik";
import { useNavigate } from "react-router-native";

import * as yup from "yup";
import { useApolloClient , useQuery} from "@apollo/client";


import useEditGoal from "../hooks/useEditGoal";
import NewGoalForm from "./NewGoalForm";
import { ME } from "../graphql/queries";



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
  .lessThan(yup.ref('steps'), "increments must be less than steps")
  
  .required('number of increments is required')
  .test('divisible', 'steps must be divisible by increments', 
  function(value){

    
return helper % value === 0
  })
});

const EditGoal = (props) => {



const navigate = useNavigate() 

const [editGoal, result] = useEditGoal();

const apolloClient = useApolloClient()

const { data } = useQuery(ME, {
  fetchPolicy: "cache-and-network",
});

const initialValues = {
  name: props.name,
  description: props.description ? props.description : "",
  steps: props.steps,
  increments: props.increments
  
  
};

    const onSubmit = async (values) => {
      
     

      let { name, description, steps, increments,  } = values;
      steps = Number(steps)
      increments = Number(increments)
     const id = props.id
try{
      const {data} = await editGoal({
        variables: {
        id: id,
        name: name, 
        description: description,
         steps: steps,
        increments: increments,
        }
        

      })
      
    } catch (e) {
        
      console.log(e);
    }

    await apolloClient.resetStore()
      props.refetchGoals()
props.close()

      navigate('/')
     
          
      
    };
  
    return (
      
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <NewGoalForm onSubmit={handleSubmit} submitButton = "Edit goal" />}
        </Formik>
      
    );
  };
  
  export default EditGoal;
