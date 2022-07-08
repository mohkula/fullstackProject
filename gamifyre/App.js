
import { StyleSheet } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import createApolloClient from './src/utils/apolloClient';



import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);



import Main from './src/components/Main';



const App = () => {
  
  return (
    <>
    <NativeRouter>
    <ApolloProvider client={apolloClient}>

      <Main />
      </ApolloProvider>

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