const express = require('express')
const { register, login, logout } = require('../components/authController')
const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)


module.exports = router