import HTTP_CODE from "../../../../constants/code.const"
import { Midd } from "../../../../interfaces/main"

const validateRolRegister: Midd = async ( req, res, next ) => {
    try {
        switch (req.body.rol) {
            case 'admin':
                return res.status( HTTP_CODE.UNAUTHORIZE ).json({ 
                    message: 'This route does not allow registration of user admin', 
                    status: HTTP_CODE.UNAUTHORIZE
                })
                break
            case 'reader':
            case 'creator':
                next()
                break
            default:
                return res.status( HTTP_CODE.UNAUTHORIZE ).json({ 
                    message: 'Rol invalido!', 
                    status: HTTP_CODE.UNAUTHORIZE
                })
                break
        }
        next()
    } catch ( error: any ) {
        res.status( HTTP_CODE.INTERNAL_SERVER_ERROR ).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR
        })
    }
   
}

export default validateRolRegister