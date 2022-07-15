
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

    paddingBottom: 222

  
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
  

const { data } = useGoals();
const loggedView = () => {

  if(token){
    return(
      <View style={styles.flexItemA}>
        
    <Text color='primary'>Welcome!</Text>
   
    {data ? <GoalCounterList goals={data}/>
    :
    <Text color='primary'> loading...</Text>
    }
    
            </View>
    )
    }
    return(

      <Text color='primary'> Log in to view or create goals</Text>

    )
   


}
  








  
  
const navigate = useNavigate()

    const onPress = () => {
navigate("/newGoal")
    }
    return (<View style={styles.container}>

<Text fontWeight='bold' color= 'primary' style={{ textAlign: "center" }}>
   Home page
</Text>

        
<View >

  {loggedView()}

  </View>    

        
  </View>
      );
}

export default Home