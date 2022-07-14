
import {  StyleSheet, View, Button } from "react-native";

import Text from "./Text";

import ProgressBar from "./ProgressBar";
import { useState } from "react";

import theme from "../../theme";
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

  
const GoalCounter = (props) => {
    const [count, setCount] = useState(0)

    
    return (
    
    <View style={styles.flexItemA}>

<View style={styles.flexContainer}>


<Button style={styles.circle} title='-' onPress={() => {
 count - props.increments >= 0 ? setCount(count -props.increments)
 :
 null
 
}

}>

</Button>

<View style={styles.flexItemA}> 

<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>


</View>


<Button style={styles.circle} title='+' onPress={() =>{
 count + props.increments <= props.steps ? setCount(count + props.increments)
 :
 null
}
}>

</Button>

</View>


    </View>)
}

export default GoalCounter