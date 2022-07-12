
import { Pressable,  View } from 'react-native';
import { useNavigate } from "react-router-native";

import useGoals from '../hooks/useGoals';
import Text from './Text';
import GoalCounter from './GoalCounter';
const Home = () => {


  const { data } = useGoals();

  
  
const navigate = useNavigate()

    const onPress = () => {
navigate("/newGoal")
    }
    return (
        <View>
          
         
         {data ? <GoalCounter name={data.allGoals[0].name}
          increments={data.allGoals[0].increments} 
          steps={data.allGoals[0].steps} /> : null   }



  

          <Text color= 'primary' style={{ textAlign: "center" }}> Home page</Text>
  
          
          <Pressable onPress={onPress} >
  
          </Pressable>

  
         
         
          <View>
          
        </View>
  
        </View>
        
      );
}

export default Home