const express = require('express')
const { register, login } = require('./authController')
const validateUsername = require('./middlewares/validateUsername')
const validateRolRegister = require('./middlewares/validateRolRegister')
const validateRolRegisterAdmin = require('./middlewares/validateRolRegisterAdmin')
const validateEmail = require('./middlewares/validateEmail')
const router = express.Router()


router.post('/register', [ validateUsername, validateEmail, validateRolRegister ], register)
router.post('/registerAdmin', [ validateUsername, validateEmail, validateRolRegisterAdmin ], register)
router.post('/login', login)


module.exports = router