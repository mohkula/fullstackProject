
import {  StyleSheet, View, Pressable } from "react-native";

import Text from "./Text";

import ProgressBar from "./ProgressBar";
import { useState } from "react";


import theme from "../../theme";


  
const GoalCounter = (props) => {

    
    const [count, setCount] = useState(0)


const increaseCount = () => {
if(count + props.increments <= props.steps){
    setCount(count + props.increments)
    props.setProgress(count + props.increments, props.name)
}
}

const decreaseCount = () => {
    if(count - props.increments >= 0){
        setCount(count - props.increments)
        console.log(props.name)
        props.setProgress(count - props.increments, props.name)
    }
    
}

    
    
    return (
    
    <View style={styles.flexItemA}>

<View style={styles.flexContainer}>


<Pressable style={styles.circle} 
 onPress={decreaseCount
}>
    <Text color ='primary'> - </Text>

</Pressable>

<View style={styles.flexItemA}> 

<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>


</View>


<Pressable style={styles.circle} 
 onPress={ increaseCount
 
}

>
    <Text color ='primary'> + </Text>

</Pressable>


</View>


    </View>)
}

const styles = StyleSheet.create({
   
    flexContainer: {
        width: 380,
        height: 200,
        
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingTop: 10,
         paddingBottom: 10,
         backgroundColor: theme.colors.primary

         
         
       },

    flexItemA: {
          
        flexDirection: 'column',

        
      },
    flexColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',


    },

    circle: {
        width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
      },

    
   
  });

export default GoalCounter