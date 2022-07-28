const Goal = require('../models/Goal')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'

const {AuthenticationError} = require('apollo-server')


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
                progress: args.progress,
                madeBy: args.madeBy
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


      const currentUser = context.currentUser

        if (!currentUser) {
          throw new AuthenticationError("not authenticated")
        }

        

        const goalToEdit = await Goal.findById(args.id)
        const updatedGoal = {
          id: args.id,
          name: args.name ? args.name :   goalToEdit.name,
          description: args.description ? args.description : goalToEdit.description,
          steps: args.steps ? args.steps : goalToEdit.steps,
          increments: args.increments ? args.increments :  goalToEdit.increments,
          progress: args.progress ? args.progress : args.setProgress
          }
          await Goal.findByIdAndUpdate(goalToEdit.id,updatedGoal )
          
          return updatedGoal
    },

    deleteGoal: async(root, args, context) => {

      const currentUser = context.currentUser

        if (!currentUser) {
          throw new AuthenticationError("not authenticated")
        }

        const goals = await Goal.find({})

        await Goal.findByIdAndDelete(args.id)

        return args.id
    }
  }

}

  module.exports = resolvers