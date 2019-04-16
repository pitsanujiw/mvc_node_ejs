const mongoose = require('mongoose')
const addUsers = require('../models/add.model')

exports.addUser = (req, res, next) => {
  const Adduser = new addUsers({
    _id: mongoose.Types.ObjectId(),
    fullName: req.body.users
  })
  Adduser.save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(404).json({
        error: err
      })
    })
}

exports.getUser = (req, res, next) => {
  addUsers
    .find()
    .exec()
    .then(result => {
      res.render('index', { title: 'My App', items: result })
    })
    .catch(err => {})
}

exports.delUser = (req, res, next) => {
  addUsers
    .deleteOne({
      _id: req.params.id
    })
    .exec()
    .then(_ => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}
