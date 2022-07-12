import { StyleSheet, View, Animated } from "react-native";
import Constants from 'expo-constants';
import Text from "./Text";




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },

    progressBar: {
        height: 20,
        flexDirection: 'row',
     width: 150,
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      },
      progressBarFill: {
        ...StyleSheet.absoluteFill,
         backgroundColor: "#8BED4F"
          
      },
      flexColumn: {
        flexDirection: 'column',
        justifyContent: 'space-around',
 

    }

   });

const ProgressBar = (props) => {

    

return(

<View style={styles.flexColumn}>



<View style={styles.progressBar}>
<Animated.View style={[styles.progressBarFill, {width: Math.floor((props.progress / props.steps) * 150)}]} /> 
</View>

    <Text color = 'primary'> {props.progress} / {props.steps}</Text>
    <Text color = 'primary'>  {Math.floor((props.progress / props.steps) * 100)} %   </Text>

</View>
    

)
}

export default ProgressBar