/** Se importa el servicio @UserService */
const UserService = require('../services/userService')

/** Despues se debe instanciar el servicio */
const userService = new UserService()

/** Método que retorna todos los usuarios */
exports.getAllUsers = async ( req, res ) => {
    // console.log('obteniendo todos los usuarios');
    /** Para enviar estados de respuesta se usa el @method status(code) */
    /** Para dar una respuesta se puede usar @method send y @method json */

    const data = await userService.getAll()
    res.status(200).json({
        message: 'obteniendo todos los usuarios',
        data
    })
}

/** Método que retorna un usuario */
exports.getUser = async ( req, res ) => {
    /** Se pueden usar los parametros query */
    // console.log(req.query.enabled);
    
    /** leyendo parametros de ruta */
    // console.log('obteniendo un usuario' + req.params.id);

    /** Realizando peticion a nuestro servicio UserService */
    const data = await userService.filterById(req.params.id) 
    const message = data != null ? data : 'Usuario no existe'
    const status = data != null ? 200 : 404
  

    /** respuesta */
    res.status(status).json({message, data})
}

/** Método que crea o inserta un usuario a la app */
exports.createUser = async ( req, res ) => {
    try {
        let data = req.body
        await userService.create(data)
        /** respuesta */
        res.status(201).json({message: 'Usuario registrado'})
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}

/** Método que actualiza los datos de un usuario */
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        console.log( 'Id de usuario a editar: ' + id )

        /** Obtenemos los datos del usuario */
        let user = await userService.filterById(req.params.id) 

        /** Validamos que usuario exista */
        if(!user) return res.status(404).json({message: 'Usuario no existe'})

        /** Realizamos la actualizacion de datos si el usuario existe */
        await userService.update(id, data)

        /** Obtenemos los nuevos datos */
        user = await userService.filterById(req.params.id)  

        /** respuesta */
        res.status(200).json({message: 'Datos Actualizandos con exito', user})

    } catch (error) {
        /** respuesta */
        res.status(500).json({message: error.message})
    }
}

/** Método que elimina un usuario */
exports.deleteUser = async (req, res) => {
    const { id } = req.params
    console.log( 'Id de usuario a eliminar: ' + id )
    /** Obtenemos los datos del usuario */
    let user = await userService.filterById(req.params.id) 

    /** Validamos que usuario exista */
    if(!user) return res.status(404).json({message: 'Usuario no existe'})

    /** Realizamos la accion de eliminar */
    await userService.delete(id)

    /** respuesta */
    res.status(200).json({message: 'Usuario eliminado correctamente'})
}

