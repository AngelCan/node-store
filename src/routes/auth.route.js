const express = require('express')
const authApi = express.Router()
const { saveUser , signIn} = require('../controllers/auth.controller')
const verifySignUp = require('../middlewares/verifySignUp')
const verfyEmtyFields = require('../middlewares/verifyEmptyFields')

authApi.post('/signUp', verfyEmtyFields, verifySignUp, saveUser)
authApi.post('/login', signIn)

module.exports = authApi