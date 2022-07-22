import { useMutation } from "@apollo/client";
import { CREATE_GOAL } from "../graphql/mutations";


const useCreateGoal = () => {

    const [mutate, result] = useMutation(CREATE_GOAL)

    const createGoal = async ({name, description, steps, increments, madeBy}) => {

        mutate({
        variables: {
            name: name,
            description: description,
            steps: steps,
            increments: increments,
            progress: 0,
            madeBy: madeBy
        },
    })

}

return [createGoal, result]

}

export default useCreateGoal