const RolService = require('../rolService')
const rolService = new RolService()

const validateNotRepitRol = async ( req, res, next ) => {
    try {
        const rolExists = await rolService.filterByName( req.body.name )        
        if( rolExists ) return res.status( 400 ).json({ message: 'Rol ya existe', status: 400 })
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500 })
    }
}

module.exports = validateNotRepitRol