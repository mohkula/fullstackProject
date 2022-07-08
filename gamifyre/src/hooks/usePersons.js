import { GET_PEOPLE } from "../graphql/queries";

import { useQuery } from "@apollo/client";


const usePersons = () => {

    const { data, ...rest } =  useQuery(GET_PEOPLE, {
        
         fetchPolicy: 'cache-and-network',
     })

console.log(data)
     return {data, ...rest}


}

export default usePersons
