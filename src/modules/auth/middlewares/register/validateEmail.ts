import HTTP_CODE from '../../../../constants/code.const'
import { Midd } from '../../../../interfaces/main'
import AuthService from '../../authService'
const authService = new AuthService

const validateEmail: Midd = async ( req, res, next ) => {
    try {
        const { email } = req.body
        if( email ){ 
            let emailFind = await authService.filterByEmail( email )
            if(emailFind){
                res.status( HTTP_CODE.UNAUTHORIZE ).json({ 
                    message: 'El email ya existe', 
                    status: HTTP_CODE.UNAUTHORIZE 
                })
            }
        }
    } catch ( error: any ) {
        res.status( HTTP_CODE.INTERNAL_SERVER_ERROR ).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    } finally {
        next()
    }
}

export default validateEmail