import { useMutation } from "@apollo/client";
import { DELETE_GOAL } from "../graphql/mutations";


const useDeleteGoal = () => {

    const [mutate, result] = useMutation(DELETE_GOAL)

    const deleteGoal = async (id) => {
        console.log(id)
    mutate({
        variables: {
            id: id
        },
    })

}

return [deleteGoal, result]

}

export default useDeleteGoal