import { ScrollView, View,StyleSheet, Pressable } from "react-native";
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
    
  
    return (
    
  <View style={styles.container}>
          <ScrollView horizontal = {true} style={styles.container}  >
         
  
         <View style={styles.container}>
  
  <Text > Home</Text>
 

  </View>
          
          </ScrollView>
          </View>
    
  
    )
  
  };
  
  export default TopBar;