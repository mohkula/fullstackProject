
import { Pressable,  View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";

import theme from '../../theme';
import useGoals from '../hooks/useGoals';
import Text from './Text';

import GoalCounterList from './GoalCounterList';
const Home = () => {

  const styles = StyleSheet.create({

    container: {
      backgroundColor: 'white',
      flexGrow: 1,
      flexShrink: 1,
    },
  flexItemA: {
          
    flexDirection: 'column',
    

    
  },
});


  const { data } = useGoals();

  const dataView = () => {


if(data){
return(
  <View style={styles.flexItemA}>
    

   <GoalCounterList goals={data}/>        


 
        </View>
)
}
return (
<Text color='primary'> loading...</Text>

)

}

  
  
const navigate = useNavigate()

    const onPress = () => {
navigate("/newGoal")
    }
    return (<View style={styles.container}>

<Text color= 'primary' style={{ textAlign: "center" }}>
   Home page
</Text>

        
<View >

  {dataView()}

  </View>    

        
  </View>
      );
}

export default Home