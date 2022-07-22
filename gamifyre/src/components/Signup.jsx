import { Formik } from "formik";
import { View } from "react-native";
import SignUpForm from "./SignUpForm";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignUp from "../hooks/useSignUp";
import { useState } from "react";

import Text from "./Text";

const initialValues = {
  password: "",
  username: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(40).required("Username is required"),
  password: yup.string().min(6).max(50).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null],"Password confirmation does not match")
    .required("Password Confirmation is required"),
});

const SignUp = () => {

  const [error, setError] = useState(null)
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.error)
      setTimeout(() => {
        setError('')
}, 10000)
      console.log(e);
    }
  };

  return (
    <View>
      <View>
    <Text style={{ textAlign: 'center'}} color = 'error'>{error}</Text>
    </View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;