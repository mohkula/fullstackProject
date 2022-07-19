import { gql } from '@apollo/client';




export const CREATE_GOAL = gql`
mutation createGoal($name: String!, $description: String,
     $steps: Int!, $increments: Int!, $progress: Int!){
        addGoal(
            name: $name
            description: $description
            steps: $steps
            increments: $increments
            progress: $progress

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

mutation editGoal($name: String!, $setProgress: Int!){

  editGoal(name: $name, setProgress: $setProgress)  {
    name
    progress
  }
}
`