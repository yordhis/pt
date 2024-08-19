const jwt = require('jsonwebtoken')
require('dotenv').config()


const verifyToken = (req, res, next) => {
    try {
        const authorization = req.headers.authorization
        
        if(!authorization) {
            const payloadAnonimo = {
                username: 'anonimo',
                rol: 'readertxt'
            }
            /** Generamos un token de solo lectura de texto anonimo */
            const token = jwt.sign(payloadAnonimo, process.env.APP_SECRET_KEY, 'h1')
            req.token = token
            req.user = payloadAnonimo
            console.log(req.token)
            console.log(req.user)
            
            next()
        }
            
        const token = authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.APP_SECRET_KEY)
        req.user = payload

        next()
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }

}

module.exports = verifyToken

