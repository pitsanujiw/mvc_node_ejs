const app = require('express')()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const userAdd = require('./routes/users.route')
/**
 * configure app
 */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/**
 * use middleware
 */

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

/**
 * mongoose connect
 */
mongoose.connect(
  'mongodb://' + process.env.MONGO_DB_USER + '/' + process.env.MONGO_DB,
  {
    useNewUrlParser: true
  }
)
/**
 * define Routers
 */
app.use('/', userAdd)
/**
 * listen connected
 */
app.listen(process.env.PORT, () => {
  console.log('connection on port : ' + process.env.PORT)
})
