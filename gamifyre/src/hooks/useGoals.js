import { GET_GOALS } from "../graphql/queries";

import { useQuery } from "@apollo/client";


const useGoals = () => {

const [query, result] = useQuery(GET_GOALS, {
        
    fetchPolicy: 'cache-and-network',
})

    const getGoals = async() => {

        const { data, ...rest } =  
        await query()
        
        return {data, ...rest}

    }

    return [getGoals, result]
    


}

export default useGoals
