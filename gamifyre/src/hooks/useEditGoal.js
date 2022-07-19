import { EDIT_GOAL } from "../graphql/mutations";
import { useMutation } from "@apollo/client";


const useEditGoal = () => {

    const [mutate, result] =  useMutation(EDIT_GOAL)

   

    const editGoal = async ({name, setProgress}) => {
        mutate({
            variables: {
                name: name,
                setProgress: setProgress
            },
        })
    }

return[editGoal, result]
}

export default useEditGoal
