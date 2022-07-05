import { Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopBar from './TopBar';


import theme from '../../theme';
import Text from './Text';
import NewGoal from '../NewGoal';

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.mainBackground,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

const Main = () => {
let show = true
 const onPress = () =>{
  console.log("d")
show = !show
console.log(show)
 }
    return (
      <View>
        
        <TopBar />
        <Text color= 'primary'> Home page</Text>

        <Pressable onPress={onPress} >
        <Text color= 'primary'> Create a new goal</Text>

        </Pressable>

        {show ? <NewGoal /> : null}
       
        <StatusBar style="auto" />

      </View>
    );
  };

  export default Main