
import {   View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import useGoals from '../hooks/useGoals';
import Text from './Text';
import { ME } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import GoalCounterList from './GoalCounterList';
import useAuthStorage from  '../hooks/useAuthStorage'





const Home = () => {
let user = null
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

if(data){

  user = data.me
}
  const [token, setToken] = useState(null)

const authStorage = useAuthStorage()

useEffect(() => {

  const getToken = async () => {
    const token = await authStorage.getAccessToken()
   setToken(token)
  }
  getToken()

 
}, [])
  








const loggedView = () => {

  if(user){
    return(
      <View style={styles.flexItemA}>
        
    <Text color='primary'>Welcome {user.username}! </Text>
   
       <GoalCounterList user={user}/>
    
    
            </View>
    )
    }
    return(

      <Text color='primary'> Log in to view or create goals</Text>

    )
   


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

export default Home