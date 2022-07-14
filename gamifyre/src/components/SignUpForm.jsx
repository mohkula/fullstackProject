import React from 'react'
import { Pressable, StyleSheet,  View } from 'react-native'
import theme from '../../theme'
import Text from './Text'
import FormikTextInput from './FormikTextInput'

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder="Username"/>
      <FormikTextInput secureTextEntry={true} name='password' placeholder="Password"/>
      <FormikTextInput secureTextEntry={true} name='passwordConfirmation' placeholder="Password confirmation"/>
      <Pressable style={styles.signinContainer} onPress={onSubmit}>
        <Text style={{ textAlign: 'center'}} color="white" fontWeight='bold' fontSize="subheading">Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default SignUpForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white
  },
  signinContainer: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 4,
  }
})