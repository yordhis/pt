const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    
    /** Obtenemos el token */
    const authorization = req.headers.authorization

    /** Validamos que exista el token */
    if(!authorization) return res.status(400).json({ message:'Token no enviado' })
    
        
    try {
        /** Se obtienen el token en limpio */
        const token = authorization.split(' ')[1]

        /** 
         * Desencriptamos el token y los almacenamos en 
         * @var req.user 
         */
        // eslint-disable-next-line no-undef
        req.user = jwt.verify(token, app.get('secret_key'))
        next()
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }

}

