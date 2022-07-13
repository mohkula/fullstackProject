const { ApolloServer, gql } = require('apollo-server')

const mongoose = require('mongoose')


const typeDefs = require('./src/graphQl/typedefs')
const resolvers = require('./src/graphQl/resolvers')

const Goal = require('./src/models/Goal')

const MONGODB_URI = `mongodb+srv://fullstack:salainen@cluster0.bgklv.mongodb.net/gamiFyre?retryWrites=true&w=majority`

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })



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





const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})