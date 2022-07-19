const { gql } = require('apollo-server')


const typeDefs = gql`
  type Goal {
    name: String!
    description: String
    steps: Int!
    increments: Int!
    progress: Int!
  }

  type User {
    username: String!
    password: String!
    goals: [Goal]!
    
  }

  type Token {
    value: String!
  }



  type Query {
    goalCount: Int!
    allGoals: [Goal!]!
    findGoal(name: String!): Goal
    me: User
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

      login(
        username: String!
        password: String!
      ): Token


    }
`


module.exports = typeDefs