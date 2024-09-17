const AuthService = require('../../authService')
const authService = new AuthService

const validateEmail = async (req, res, next) => {

    const email = req.body.email

    if( email ){ 
        let emailFind = await authService.filterByEmail( req.body.email )
        if(emailFind){
            return res.status(401).json({ message: 'El email ya existe', status: 401 })
        }
    }
    
    next()
}

module.exports = validateEmail