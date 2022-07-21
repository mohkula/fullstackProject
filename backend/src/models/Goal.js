const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  description: {
    type: String,
  },
  steps: {
    type: Number,
    required: true
  },
  increments: {
    type: Number,
    required: true  
  },

  progress: {
    type: Number,
    required: true
  },

  madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    
  }
})

  module.exports = mongoose.model('Goal', schema)