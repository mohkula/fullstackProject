import { gql } from '@apollo/client';




export const CREATE_GOAL = gql`
mutation createGoal($name: String!, $description: String,
     $steps: Int!, $increments: Int!, $progress: Int! $madeBy: ID!){
        addGoal(
            name: $name
            description: $description
            steps: $steps
            increments: $increments
            progress: $progress
            madeBy: $madeBy

        ){
            name
            description
            steps
            increments
            progress
        }
     }

`

export const CREATE_USER = gql`
mutation newUser($username: String!, $password: String! ) {
  createUser(username: $username, password: $password) {
    username
    
  }
}
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`

export const EDIT_GOAL = gql`

mutation editGoal($id: ID!, $name: String, $setProgress: Int, $description: String,
  $steps: Int, $increments: Int){

  editGoal(id: $id, name: $name, setProgress: $setProgress, description: $description,
    steps: $steps, increments: $increments)  {
    id
    name
    progress
    description
    steps
    increments
  }
}
`

export const DELETE_GOAL = gql`

mutation deleteGoal($id: ID!){

  deleteGoal(id: $id )  
  
    
  
}
`
