const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
})

  module.exports = mongoose.model('Goal', schema)