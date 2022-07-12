
import { Pressable, StyleSheet, View, Button } from "react-native";

import Text from "./Text";

import ProgressBar from "./ProgressBar";
import { useState } from "react";

import theme from "../../theme";
const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      width: 400,
      height: 100,
      
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingTop: 10,
    },

    flexColumn: {
        flexDirection: 'column',
        justifyContent: 'space-around',
 

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

    box: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red'
      },
    

    
   
  });

  
const GoalCounter = (props) => {
    const [count, setCount] = useState(0)


    
    return (
    
    <View style={styles.box}>

<View style={styles.container}>

<Button style={styles.circle} title='+' onPress={() => setCount(count +props.increments)}>

</Button>


<View style={styles.flexColumn}> 

<Text color = 'primary'> {props.name}</Text>
<ProgressBar progress={count} steps={props.steps}/>


</View>


<Button style={styles.circle} title='-' onPress={() => setCount(count -props.increments)}>

</Button>

</View>


    </View>)
}

export default GoalCounter