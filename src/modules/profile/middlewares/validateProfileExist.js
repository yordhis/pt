const ProfileService = require('../profileService')
const profileService = new ProfileService

const validateProfileExist = async ( req, res, next ) => {
    try {
        const user = req.user
        const profileExist = await profileService.filterById( user.id )
        if( profileExist ){
            return res.status(400).json({ message: 'Ya tienes un perfil registrado.', status: 400 })
        }
        next()    
    } catch (error) {
        res.status(400).json({ message: `Falló al validar si el perfil existe. Error: ${error.message}.`, status: 500 })
    }
}

module.exports = validateProfileExist