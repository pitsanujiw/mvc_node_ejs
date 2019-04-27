const mongoose = require('mongoose')

const addModules = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullName: { type: String, required: true },
  fetch: { type: Object, required: false }
})

module.exports = mongoose.model('addUsers', addModules)
