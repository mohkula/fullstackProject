const { gql } = require('apollo-server')


const typeDefs = gql`
  type Goal {
    name: String!
    description: String
    steps: Int!
    increments: Int!
  }

  type User {
    username: String!
    password: String!
    
  }



  type Query {
    goalCount: Int!
    allGoals: [Goal!]!
    findGoal(name: String!): Goal
  }

  type Mutation {
    addGoal(
      name: String!
      description: String
      steps: Int!
      increments: Int!
     
    ): Goal


    createUser(username: String!
      password: String!): User

    }
`


module.exports = typeDefs