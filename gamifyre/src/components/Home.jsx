
import {   View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";
import { useState, useEffect } from 'react';
import useGoals from '../hooks/useGoals';
import Text from './Text';

import GoalCounterList from './GoalCounterList';
import useAuthStorage from  '../hooks/useAuthStorage'
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

const Home = () => {

  const [token, setToken] = useState(null)

const authStorage = useAuthStorage()

useEffect(() => {

  const getToken = async () => {
    const token = await authStorage.getAccessToken()
   setToken(token)
  }
  getToken()

 
}, [])
  

console.log(authStorage.getAccessToken())
  const { data } = useGoals();

  const dataView = () => {


if(data){
return(
  <View style={styles.flexItemA}>
    
{token ? <Text color='primary'>Welcome!</Text>
:
null
}
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