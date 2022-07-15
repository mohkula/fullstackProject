import { ScrollView, View,StyleSheet } from "react-native";
import { Link } from 'react-router-native';
import { useState } from "react";
import Constants from 'expo-constants';

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
  
      paddingRight: Constants.statusBarHeight
      
      
    },
  
    
    
   
  });

const TopBar =  () => {

  const [token, setToken] = useState(null)

    
  
    return (
    
  <View style={styles.container}>
          <ScrollView horizontal = {true} style={styles.container}  >
         
  
         <View style={styles.container}>
  
         <Link to = '/'><Text > Home</Text></Link>

 
 
 {token ? <Link to = '/newGoal'><Text > New goal</Text></Link> 
 :
 <View style={styles.container}>  
 <Link to = '/signUp'><Text > Sign up</Text></Link>
 <Link to = '/logIn'><Text >Log in</Text></Link>

 </View>
 }

  </View>
          
          </ScrollView>
          </View>
    
  
    )
  
  };
  
  export default TopBar;