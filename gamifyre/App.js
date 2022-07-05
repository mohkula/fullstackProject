
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

const App = () => {
  
  return (
    <>
    <NativeRouter>
      <Main />
    </NativeRouter>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App