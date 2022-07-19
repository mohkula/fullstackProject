const { ApolloServer, gql } = require('apollo-server')

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'



const typeDefs = require('./src/graphQl/typedefs')
const resolvers = require('./src/graphQl/resolvers')

const Goal = require('./src/models/Goal')
const User = require('./src/models/User')

const MONGODB_URI = `mongodb+srv://fullstack:salainen@cluster0.bgklv.mongodb.net/gamiFyre?retryWrites=true&w=majority`

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })









const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      )
      const currentUser = await User
        .findById(decodedToken.id).populate('goals')
      return { currentUser }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})