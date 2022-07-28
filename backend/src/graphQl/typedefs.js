const { gql } = require('apollo-server')


const typeDefs = gql`
  type Goal {
    name: String!
    description: String
    steps: Int!
    increments: Int!
    progress: Int!
    id: ID!
    madeBy: ID!
  }

  type User {
    username: String!
    password: String!
    goals: [Goal]!
    id: ID!
    
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
      progress: Int!
      madeBy: ID!
     
    ): Goal


    createUser(username: String!
      password: String!): User

      login(
        username: String!
        password: String!
      ): Token

      editGoal(

        id: ID!
        name: String
        setProgress: Int
        description: String
        steps: Int
        increments: Int
        

      ): Goal

      deleteGoal(
        id: ID!
      ): ID



    }
`


module.exports = typeDefs