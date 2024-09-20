import HTTP_CODE from '../../../constants/code.const'
import { Midd } from '../../../interfaces/main'
import RolService from '../rolService'
const rolService = new RolService()

const validateNotRepitRol: Midd = async ( req, res, next ) => {
    try {
        const rolExists = await rolService.filterByName( req.body.name )        
        if( rolExists ) return res.status( HTTP_CODE.BAD_REQUEST ).json({ 
            message: 'Rol ya existe', 
            status: HTTP_CODE.BAD_REQUEST 
        })
        
    } catch (error: any) {
        return res.status( HTTP_CODE.INTERNAL_SERVER_ERROR ).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    } finally {
        next()
    }
}

export default validateNotRepitRol