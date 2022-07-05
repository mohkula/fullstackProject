import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import theme from '../../theme';
import Text from './Text';

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
        <Text color= 'primary'> Home page</Text>
        <StatusBar style="auto" />
      </View>
    );
  };

  export default Main