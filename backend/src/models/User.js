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
    unique: true,
    minlength: 5
  },

 
 
 
})

  module.exports = mongoose.model('Goal', schema)