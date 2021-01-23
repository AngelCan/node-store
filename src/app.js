const express = require('express')
const apiProduct = require('./routes/product.route')
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()
const authApi = require('./routes/auth.route')
const apiFeedback = require('./routes/feedback.route')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString: `mongodb://localhost:27017/store`
}))

app.use('/v2', apiProduct)
app.use('/v2', authApi)
app.use('/v2', apiFeedback)

module.exports = app