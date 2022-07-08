
import { Pressable,  View } from 'react-native';
import { useNavigate } from "react-router-native";

import usePersons from '../hooks/usePersons';
import Text from './Text';
import GoalCounter from './GoalCounter';
const Home = (props) => {


  const { data } = usePersons();


  
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
          
{props.name ? <GoalCounter increment = {props.increment}/> : null}
        </View>
  
        </View>
        
      );
}

export default Home