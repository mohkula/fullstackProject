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
        width: '100%',
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

const ProgressBar = ({progress}) => {

    const width = progress


return(

<View style={styles.flexColumn}>



<View style={styles.progressBar}>
<Animated.View style={[styles.progressBarFill, {width: width}]} /> 
</View>

    <Text color = 'primary'> {width}%</Text>

</View>
    

)
}

export default ProgressBar