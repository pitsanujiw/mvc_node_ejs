const express = require('express')
const router = express.Router()
const userAll = require('../controllers/add.controller')

router.post('/add', userAll.addUser)
router.get('/', userAll.getUser)
router.get('/delete/:id', userAll.delUser)

module.exports = router
