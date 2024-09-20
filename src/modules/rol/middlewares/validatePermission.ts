import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"


const validatePermission: Midd = async ( req, res, next ) => {
    try {
        const arrayPermissionStatic = ['GET', 'POST', 'PUT', 'DELETE']
        const { permissions } = req.body

        for (let i = 0; i < permissions.length; i++) {
            const permission = permissions[i]
            if(! arrayPermissionStatic.includes(permission) ) return res.status( HTTP_CODE.BAD_REQUEST ).json({ 
                message: 'El permiso ingresado no es valido', 
                status: HTTP_CODE.BAD_REQUEST })
        }
    } catch (error: any) {
        return res.status( HTTP_CODE.INTERNAL_SERVER_ERROR ).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR  
        })
    } finally {
        next()
    }
}

export default validatePermission