import { GET_GOALS } from "../graphql/queries";

import { useQuery } from "@apollo/client";


const useGoals = () => {
    

const {data, refetch, ...rest} = useQuery(GET_GOALS, {
        
    fetchPolicy: 'cache-and-network',
})



    return {goals:data, refetch, ...rest}
    


}

export default useGoals
