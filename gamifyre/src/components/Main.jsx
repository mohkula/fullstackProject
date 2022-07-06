import {  StyleSheet, View } from 'react-native';

import { Route, Routes, Navigate } from 'react-router-native';


import TopBar from './TopBar';
import theme from '../../theme';

import NewGoal from '../NewGoal';
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
      <View>
        
        <TopBar />

        <Routes>
       <Route path="/" element={<Home />} exact />
       <Route path="/newGoal" element={<NewGoal />} exact />
       </Routes>
       

      </View>
    );
  };

  export default Main