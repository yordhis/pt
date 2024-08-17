const AuthService = require('../authService')
const authService = new AuthService

const validateEmail = async (req, res, next) => {

    console.log( req.body.email )
    let emailFind = await authService.filterByEmail( req.body.email )
    console.log(emailFind)
    if(emailFind){
        return res.status(400).json({ messaje: 'El email ya existe', status: 400 })
    }else{
        next()
    }
    
}

module.exports = validateEmail