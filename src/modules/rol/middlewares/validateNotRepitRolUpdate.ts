import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"
import RolInterface  from "../interfaces/Rol.interface"

import RolService from '../rolService'
const rolService = new RolService()

const validateNotRepitRolUpdate: Midd = async ( req, res, next ) => {
    try {

        const rolId: RolInterface | any = await rolService.filterById( req.params.id )        
        const rolExists: RolInterface | any = await rolService.filterByName( req.body.name )        
        
        if( rolExists && rolId){
            if(rolExists.name != rolId.name){
                return res.status( HTTP_CODE.BAD_REQUEST ).json({ 
                    message: 'Rol ya existe', 
                    status: HTTP_CODE.BAD_REQUEST 
                })
            }
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

export default validateNotRepitRolUpdate