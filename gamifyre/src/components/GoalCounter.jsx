
import { Pressable, StyleSheet, View } from "react-native";

import Text from "./Text";

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

    return (
    
    <View style={styles.box}>

<View style={styles.container}>

<Text color = 'primary'>   text</Text>
<Text color = 'primary'>   text2</Text>
<Text color = 'primary'>   text3</Text>
<Text color = 'primary'>   text4</Text>

</View>


    </View>)
}

export default GoalCounter