const ProfileService = require('./profileService')
const profileService = new ProfileService()

/** Método que retorna un usuario */
exports.getProfile = async ( req, res ) => {
    try {
        const user = req.user
        const data = await profileService.filterById( user.id ) 
        const message = data != null ? 'ok' : 'Perfil no existe'
        const status = data != null ? 200 : 404
        res.status(status).json({ message, status, data })
        
    } catch (error) {
        res.status(500).json({ message: `Falló en el controlador getProfile. Error: ${error.message}` })
    }
}

/** Método que crea o inserta un usuario a la app */
exports.createProfile = async ( req, res ) => {
    try {
        const data = req.body
        const user = req.user
        data.userId = user.id
        await profileService.create( data )
        /** respuesta */
        res.status(201).json({message: 'Perfil registrado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/** Método que actualiza los datos de un usuario */
exports.updateProfile = async (req, res) => {
    try {
        const data = req.body
        const user = req.user
console.log(user.id)

        const profile = await profileService.update( user.id, data )
        res.status(200).json({message: 'Datos Actualizados con exito', profile})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/** 
 * Método para eliminar los datos de perfil
 */
exports.deleteProfile = async (req, res) => {
    try {
        const { id } = req.user
        await profileService.delete(id)
        res.status(200).json({message: 'Perfil eliminado correctamente'})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

