const { ApolloServer, gql } = require('apollo-server')

let goals = [
  {
    name: "Pushups",
    description: "do pushups",
    steps: 26,
    increments: 1
  },
{
  name: "Pullups",
  description: "do pullups",
  steps: 1000,
  increments: 10

},
{
  name: "something",
  description: "do something",
  steps: 121,
  increments: 1

},
{
  name: "something more",
  description: "do something",
  steps: 121,
  increments: 1

}

]

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
`

const resolvers = {
  Query: {
    goalCount: () => goals.length,
    allGoals: () => goals,
    findGoal: (root, args) =>
      goals.find(p => p.name === args.name)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})