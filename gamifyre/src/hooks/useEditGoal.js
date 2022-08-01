import { EDIT_GOAL } from "../graphql/mutations";
import { useMutation } from "@apollo/client";


const useEditGoal = () => {

    const [mutate, result] =  useMutation(EDIT_GOAL)

   

    const editGoal = async (variables) => {
        console.log(variables)

        mutate(
            
            variables
        )
    }


return[editGoal, result]
}

export default useEditGoal
