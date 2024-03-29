import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// eslint-disable-next-line no-unused-vars
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'http://192.168.1.108:4000/graphql'
});

const createApolloClient = (authStorage) => {
  
  const authLink = setContext(async (_, { headers }) => {
     //await authStorage.removeAccessToken()
     
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
    
  });
    

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;