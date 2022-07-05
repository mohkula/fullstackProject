import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/Text';

export default function App() {
  return (
    <View style={styles.container}>
      <Text color='primary'> Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
