import { Formik } from "formik";
import { View } from "react-native";
import LoginForm from "./LoginForm";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";
const initialValues = {
  password: '',
  username: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username length must be atleast 4')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password length must be atleast 6')
    .required('Password is required'),
});


const Login = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()
  const apolloClient = useApolloClient();

 const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      await apolloClient.resetStore()
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>

  </View>
};

export default Login;