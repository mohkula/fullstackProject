import { useMutation } from "@apollo/client";
import { CREATE_GOAL } from "../graphql/mutations";


const useCreateGoal = () => {

    const [mutate, result] = useMutation(CREATE_GOAL)

    const createGoal = async ({name, description, steps, increments}) => {
    mutate({
        variables: {
            name: name,
            description: description,
            steps: steps,
            increments: increments
        },
    })

}

return [createGoal, result]

}

export default useCreateGoal