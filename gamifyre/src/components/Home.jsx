
import { Pressable,  View } from 'react-native';
import { useNavigate } from "react-router-native";

import useGoals from '../hooks/useGoals';
import Text from './Text';
import GoalCounter from './GoalCounter';
const Home = (props) => {


  const { data } = useGoals();

  
  
const navigate = useNavigate()

    const onPress = () => {
navigate("/newGoal")
    }
    return (
        <View>
          
         
         {data ? <Text color= 'primary' > {data.allGoals[0].name}</Text> : null}
          <Text color= 'primary' style={{ textAlign: "center" }}> Home page</Text>
  
          <Pressable onPress={onPress} >
          <Text color= 'primary'> Create a new goal</Text>
  
          </Pressable>

  
         
         
          <View>
          
{props.name ? <GoalCounter increment = {props.increment}/> : null}
        </View>
  
        </View>
        
      );
}

export default Home