const mongoose = require('mongoose')

const bulletinSchema = new mongoose.Schema({
  title: String,
  content: String
})

module.exports = mongoose.model('Bulletin', bulletinSchema)