import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
  const authStorage = useAuthStorage();


  const apolloClient = useApolloClient();


  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    try{
   const {data} = await mutate(
    { variables: {
        username: username,
         password: password} 
         }

   );

   await authStorage.setAccessToken(data.login.value)

   apolloClient.resetStore();
        }
        catch(e ){
          console.log(e)

        }
      
  
  };
  return [signIn, result];
};

export default useSignIn;