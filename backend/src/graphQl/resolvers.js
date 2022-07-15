const Goal = require('../models/Goal')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'


const {UserInputError} = require('apollo-server')
const resolvers = {
    Query: {
      goalCount: () => Goal.collection.countDocuments(),
      allGoals: async(root, args) =>{
        let returnedGoals = await Goal.find({})

        return returnedGoals
      }, 

      me: (root, args, context) => {
        console.log(context)
        return context
      }

    },



    Mutation: {
        addGoal: async(root, args) => {

            const newGoal = new Goal({
                name: args.name,
                description: args.description,
                steps: args.steps,
                increments: args.increments
            })


            try{  await newGoal.save()
            }
            catch (error) {
              console.log(error)
            }

            return newGoal
        },

        createUser: async(root, args) => {
        
        const user = new User({...args})
        try {
          await user.save()

        

      } catch (error) {
        console.log(error)
      
      }
       
      return user
    },

    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })
  
      if ( !user || args.password !== user.password ) {
        throw new UserInputError("wrong credentials")
      }
  
      const userForToken = {
        username: user.username,
        id: user._id,
      }
  
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    },
  }

}

  module.exports = resolvers