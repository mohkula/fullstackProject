
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


export default App