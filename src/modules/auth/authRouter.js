const express = require('express')
const { register, login, logout } = require('./authController')
const validateUsername = require('./middlewares/validateUsername')
const validateRolRegister = require('./middlewares/validateRolRegister')
const validateRolRegisterAdmin = require('./middlewares/validateRolRegisterAdmin')
const router = express.Router()


router.post('/register', [ validateUsername, validateRolRegister ], register)
router.post('/registerAdmin', [ validateUsername, validateRolRegisterAdmin ], register)
router.post('/login', login)
router.get('/logout', logout)


module.exports = router