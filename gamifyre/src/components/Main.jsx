import {  StyleSheet, View } from 'react-native';

import { Route, Routes } from 'react-router-native';


import SignUp from './Signup';
import Login from './Login';
import TopBar from './TopBar';
import theme from '../../theme';

import NewGoal from './NewGoal';
import Home from './Home';

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.mainBackground,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

const Main = () => {

    return (
      <View style={styles.container}>
        
        <TopBar />

        <Routes>
       <Route path="/" element={<Home />} exact />
       <Route path="/newGoal" element={<NewGoal />} exact />
       <Route path="/signUp" element={<SignUp />} exact />
       <Route path="/logIn" element={<Login />} exact />


       </Routes>
       

      </View>
    );
  };

  export default Main