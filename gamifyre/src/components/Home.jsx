
import { Pressable,  View } from 'react-native';
import { useNavigate } from "react-router-native";

import Text from './Text';
import GoalCounter from './GoalCounter';
const Home = () => {

const navigate = useNavigate()

    const onPress = () => {
navigate("/newGoal")
    }
    return (
        <View>
          
         
          <Text color= 'primary' style={{ textAlign: "center" }}> Home page</Text>
  
          <Pressable onPress={onPress} >
          <Text color= 'primary'> Create a new goal</Text>
  
          </Pressable>

  
         
         
          <View>
          <GoalCounter />

        </View>
  
        </View>
        
      );
}

export default Home