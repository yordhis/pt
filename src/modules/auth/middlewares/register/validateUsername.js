const AuthService = require('../../authService')
const authService = new AuthService

const validateUsername = async (req, res, next) => {

    const username = req.body.username 

    if( username ){
        let usernameFind = await authService.filterByUsername( username )
        if(usernameFind){
            return res.status(401).json({ message: 'El nombre de usuario ya existe!', status: 401 })
        }
    }
    
    next()
    
    
}

module.exports = validateUsername