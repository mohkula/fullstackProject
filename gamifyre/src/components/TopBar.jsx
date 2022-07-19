import { ScrollView, View, Pressable,StyleSheet } from "react-native";
import { Link } from 'react-router-native';
import { useState, useEffect } from "react";
import Constants from 'expo-constants';

import { useApolloClient, useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";



import useAuthStorage from "../hooks/useAuthStorage";
import Text from "./Text";


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight , 
    backgroundColor: '#24292e',
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
 
    flexDirection: 'row',

    width: "100%",
    display: "flex",

    paddingRight: Constants.statusBarHeight,
    

    
  },

  
  
 
});



const TopBar =  () => {

  let authUser = null;

  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  if (data) {
    console.log(data.me);
    authUser = data.me;
  }


const authStorage = useAuthStorage()
const apolloClient = useApolloClient();
  const [token, setToken] = useState(null)


const loggedView = () => {

  const signOut = async () => {
  
  
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
    setToken(null)
   
  
  }

  if(authUser){
    return (
      <View style={styles.container}>
         <Link to = '/'><Text > Home </Text></Link>
   <Pressable  onPress={signOut}>
    
    <Text > Sign out </Text> 
    </Pressable>
    <Link to = '/newGoal'><Text color='white' > New goal </Text></Link> 
    </View>
    )
  }
 


  return (
    <View style={styles.container}>
       <Link to = '/'><Text > Home </Text></Link>

    <Link to = '/signUp'><Text > Sign up </Text></Link>
    <Link to = '/logIn'><Text > Log in </Text></Link>
    </View>
  )
}

  


  useEffect(() => {

    const getToken = async () => {
      const token = await authStorage.getAccessToken()
     setToken(token)
    }
    getToken()
  
   
  }, [])
    
  
    return (
    
  <View style={styles.container}>
          <ScrollView horizontal = {true} style={styles.container}  >
         
  
         <View style={styles.container}>
  
        

 
 
 { loggedView()}
 



 
 

  </View>
          
          </ScrollView>
          </View>
    
  
    )
  
  };
  
  export default TopBar;