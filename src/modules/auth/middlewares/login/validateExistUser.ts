const AuthService = require('../../authService')
const authService = new AuthService()

/** 
 * Midd @method validateExistUser
 * Este midd se encarga de validar que exista el email y el username para aprobar el login
 */
const validateExistUser = async ( req, res, next ) => {
    const { username, email } = req.body
    let user = null
    if( username ) user = await authService.filterByUsername( username )
    if ( !user ) {
        if ( email ) user = await authService.filterByEmail( email )
        if( !user ) return res.status(401).json({ message: 'Username or email not exist', status: 401 })
    }
    
    req.user = user

    next()
}

module.exports = validateExistUser