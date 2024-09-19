const RolService = require('../rolService')
const rolService = new RolService()

const validateNotRepitRolUpdate = async ( req, res, next ) => {
    try {

        const rolId = await rolService.filterById( req.params.id )        
        const rolExists = await rolService.filterByName( req.body.name )        
        if( rolExists ){
            if(rolExists.name != rolId.name){
                return res.status( 400 ).json({ message: 'Rol ya existe', status: 400 })
            }
        }
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500 })
    }
}

module.exports = validateNotRepitRolUpdate