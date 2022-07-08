import { GET_GOALS } from "../graphql/queries";

import { useQuery } from "@apollo/client";


const useGoals = () => {

    const { data, ...rest } =  useQuery(GET_GOALS, {
        
         fetchPolicy: 'cache-and-network',
     })

console.log(data)
     return {data, ...rest}


}

export default useGoals
