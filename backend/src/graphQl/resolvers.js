const Goal = require('../models/Goal')
const User = require('../models/User')

const resolvers = {
    Query: {
      goalCount: () => Goal.collection.countDocuments(),
      allGoals: async(root, args) =>{
        let returnedGoals = await Goal.find({})

        return returnedGoals
      }, 
      
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
    }
  }

}

  module.exports = resolvers