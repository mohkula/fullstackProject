const { gql } = require('apollo-server')


const typeDefs = gql`
  type Goal {
    name: String!
    description: String
    steps: Int!
    increments: Int!
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

    }
`


module.exports = typeDefs