import { gql } from '@apollo/client';


export const GET_GOALS = gql`
query {
    allGoals {
      name
      description
      steps
      increments
      progress
      madeBy
      id
      lastEdited
      
    }
  } 

`

export const ME = gql`
  query  {
    me {
      username
      id
      
}
}
`

