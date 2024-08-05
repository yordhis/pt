const express = require('express')
const userLogged = require('../middlewares/userLogged')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {message:""})
})

router.get('/chat', userLogged, (req, res) => {
    res.render('chat', {
        payload:{
            email:req.session.email
        }, 
        message: `Bienvenido usuario: ${req.session.email}` 
    })
})

module.exports = router