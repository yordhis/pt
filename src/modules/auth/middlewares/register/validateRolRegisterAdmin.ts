import HTTP_CODE from "../../../../constants/code.const"
import { Midd } from "../../../../interfaces/main"

const validateRolRegisterAdmin: Midd = async ( req, res, next ) => {
    try {
        if( !( req.body.rol === 'admin' ) ) {
            res.status( HTTP_CODE.UNAUTHORIZE ).json({ 
            message: 'This route does not allow registration of readers and creators', 
            status: HTTP_CODE.UNAUTHORIZE 
            })
        }
       
    } catch (error: any) {
        res.status( HTTP_CODE.INTERNAL_SERVER_ERROR ).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    } finally {
        next()
    }
   
}

export default validateRolRegisterAdmin