const express = require('express')
const { init } = require('./configController')
const router = express.Router()

router.post('/init', init)

module.exports = router