const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  goals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Goal'
    }
  ],

 
 
 
})

  module.exports = mongoose.model('User', schema)