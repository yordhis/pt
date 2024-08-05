const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const router = express.Router()

router.get('/', verifyToken, (req, res) => {
    res.send('Bienvenido al panel de control: '+ req.user.email)
})

module.exports = router