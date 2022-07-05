
import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';

const Home = () => {

    const onPress = () => {
        console.log("pressed")
    }
    return (
        <View>
          
         
          <Text color= 'primary' style={{ textAlign: "center" }}> Home page</Text>
  
          <Pressable onPress={onPress} >
          <Text color= 'primary'> Create a new goal</Text>
  
          </Pressable>
  
         
         
        
  
        </View>
      );
}

export default Home