/** Se importa el servicio @profileService */
const ProfileService = require('./profileService')

/** Despues se debe instanciar el servicio */
const profileService = new ProfileService()

/** Método que retorna un usuario */
exports.getProfile = async ( req, res ) => {
    const data = await profileService.filterById('userId', req.params.id) 
    const message = data != null ? data : 'Perfil no existe'
    const status = data != null ? 200 : 404
    res.status(status).json({message, data})
}

/** Método que crea o inserta un usuario a la app */
exports.createProfile = async ( req, res ) => {
    try {
        let data = req.body
        await profileService.create(data)
        /** respuesta */
        res.status(201).json({message: 'Perfil registrado'})
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}

/** Método que actualiza los datos de un usuario */
exports.updateProfile = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        /** Obtenemos los datos del usuario */
        let profile = await profileService.filterById(req.params.id) 

        /** Validamos que usuario exista */
        if(!profile) return res.status(404).json({message: 'Usuario no existe'})

        /** Realizamos la actualizacion de datos si el usuario existe */
        await profileService.update(id, data)

        /** Obtenemos los nuevos datos */
        profile = await profileService.filterById(req.params.id)  

        /** respuesta */
        res.status(200).json({message: 'Datos Actualizandos con exito', profile})

    } catch (error) {
        /** respuesta */
        res.status(500).json({message: error.message})
    }
}

/** Método que elimina un usuario */
exports.deleteProfile = async (req, res) => {
    const { id } = req.params
    /** Obtenemos los datos del usuario */
    let profile = await profileService.filterById(req.params.id) 

    /** Validamos que usuario exista */
    if(!profile) return res.status(404).json({message: 'Usuario no existe'})

    /** Realizamos la accion de eliminar */
    await profileService.delete(id)

    /** respuesta */
    res.status(200).json({message: 'Perfil eliminado correctamente'})
}

