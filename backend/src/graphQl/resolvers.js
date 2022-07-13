const Goal = require('../models/Goal')

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
              throw new UserInputError(error.message, {
                invalidArgs: args,
              })
            }

            return newGoal
        }
    }
  }

  module.exports = resolvers