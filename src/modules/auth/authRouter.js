const express = require('express')
const { register, login, destroyUser } = require('./authController')
const validateUsername = require('./middlewares/register/validateUsername')
const validateRolRegister = require('./middlewares/register/validateRolRegister')
const validateRolRegisterAdmin = require('./middlewares/register/validateRolRegisterAdmin')
const validateEmail = require('./middlewares/register/validateEmail')
const validateExistUser = require('./middlewares/login/validateExistUser')
const validatePassword = require('./middlewares/login/validatePassword')
const router = express.Router()

const middRegister = [
    validateRolRegister,
    validateUsername, 
    validateEmail
]

const middRegisterAdmin = [
    validateRolRegisterAdmin,
    validateUsername, 
    validateEmail 
]

const middLogin = [
    validateExistUser,
    validatePassword
]


router.post('/register', middRegister , register)
router.post('/registerAdmin', middRegisterAdmin , register)
router.post('/login', middLogin, login)
router.delete('/:id', destroyUser)


module.exports = router