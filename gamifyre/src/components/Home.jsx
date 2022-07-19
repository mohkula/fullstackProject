
import {   View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import useGoals from '../hooks/useGoals';
import Text from './Text';

import GoalCounterList from './GoalCounterList';
import useAuthStorage from  '../hooks/useAuthStorage'
import useEditGoal from '../hooks/useEditGoal';





const Home = () => {

  const [editGoal, result] = useEditGoal();
  const setProgress = async(setProgress,name) =>{

    console.log(name)
    console.log(setProgress)
    
    try{
        const {data} = await editGoal({
         name,
         setProgress
        })
  
      } catch (e) {
        console.log(e);
      }
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
  



const { data } = useGoals();



const loggedView = () => {

  if(token){
    return(
      <View style={styles.flexItemA}>
        
    <Text color='primary'>Welcome!</Text>
   
    {data ? <GoalCounterList goals={data} setProgress={setProgress}/>
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