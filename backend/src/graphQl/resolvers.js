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
        return context.currentUser
      }

    },



    Mutation: {
        addGoal: async(root, args, context) => {

          const currentUser = context.currentUser

          if (!currentUser) {
            throw new AuthenticationError("not authenticated")
          }

            const newGoal = new Goal({
                name: args.name,
                description: args.description,
                steps: args.steps,
                increments: args.increments,
                progress: args.progress
            })

            


            try{ 
               await newGoal.save()
              currentUser.goals = currentUser.goals.concat(newGoal)
              await currentUser.save()
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

    editGoal: async(root, args, context) => {


      console.log(args)
      const currentUser = context.currentUser

        if (!currentUser) {
          throw new AuthenticationError("not authenticated")
        }

        const goals = await Goal.find({})

        const goalToEdit = goals.find(g => g.name === args.name)
        const updatetGoal = {name: goalToEdit.name,
          description: goalToEdit.description,
          steps: goalToEdit.steps,
          increments: goalToEdit.increments,
          progress: args.setProgress
          }
          await Goal.findByIdAndUpdate(goalToEdit.id,updatetGoal )
          
          return updatedGoal
    }
  }

}

  module.exports = resolvers