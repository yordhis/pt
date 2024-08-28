const bcrypt = require('bcrypt')


const validatePassword = ( req, res, next ) => {
    try {
        const passwordMatch = bcrypt.compareSync( req.body.password, req.user.password )
        if (!passwordMatch) return res.status(401).json({ message: 'Contraseña incorrecta', status: 401 })
        next()
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }

}

module.exports = validatePassword