import { Formik } from "formik";
import { View } from "react-native";
import { useState } from "react";
import LoginForm from "./LoginForm";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

import Text from "./Text";

const initialValues = {
  password: '',
  username: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const Login = () => {
  const [error, setError] = useState(null)
  const [signIn] = useSignIn()
  const navigate = useNavigate()
  const apolloClient = useApolloClient();



 const onSubmit = async (values) => {
    const { username, password } = values;


    try {
      await signIn({ username, password });
      navigate("/")
      await apolloClient.resetStore()


    } catch (e) {
      setError("wrong credentials")
      setTimeout(() => {
        setError('')
}, 10000)
      
    }
  };

  return <View>
    <View>
    <Text style={{ textAlign: 'center'}} color = 'error'>{error}</Text>
    </View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>

  </View>
};

export default Login;