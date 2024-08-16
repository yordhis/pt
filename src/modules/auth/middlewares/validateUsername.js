const AuthService = require('../authService')
const authService = new AuthService

const validateUsername = async (req, res, next) => {

    console.log( req.body.username )
    let usernameFind = await authService.filterByUsername( req.body.username )
    console.log(usernameFind)
    if(usernameFind){
        return res.status(400).json({ messaje: 'El email ya esta registrado', status: 400 })
    }else{
        next()
    }
    
}

module.exports = validateUsername