const express = require('express')
const router = express.Router()
const profileRouter = require('../modules/profile/profileRouter')

router.use('/profiles', profileRouter)

module.exports = router