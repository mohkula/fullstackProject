import { gql } from '@apollo/client';




export const CREATE_GOAL = gql`
mutation createGoal($name: String!, $description: String,
     $steps: Int!, $increments: Int!){
        addGoal(
            name: $name
            description: $description
            steps: $steps
            increments: $increments

        ){
            name
            description
            steps
            increments
        }
     }

`