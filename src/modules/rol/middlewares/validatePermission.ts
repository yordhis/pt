import { Next, ResponseT, ResquestT } from "../../../interfaces/main"

const validatePermission = ( req: ResquestT, res: ResponseT, next: Next ) => {
    try {
        const arrayPermissionStatic = ['GET', 'POST', 'PUT', 'DELETE']
        const { permissions } = req.body
        for (let i = 0; i < permissions.length; i++) {
            const permission = permissions[i]
            if(! arrayPermissionStatic.includes(permission) ) return res.status(400).json({ message: 'El permiso ingresado no es valido', status: 400 })
        }
        
        next()

    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500 })
    }
}

export default validatePermission