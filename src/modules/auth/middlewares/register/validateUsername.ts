import HTTP_CODE from '../../../../constants/code.const'
import { Midd } from '../../../../interfaces/main'
import AuthService from '../../authService'
const authService = new AuthService

const validateUsername: Midd = async ( req, res, next ) => {
    try {
        const username = req.body.username 
    
        if( username ){
            let usernameFind = await authService.filterByUsername( username )
            if(usernameFind){
                return res.status(HTTP_CODE.UNAUTHORIZE).json({ 
                    message: 'User exist!', 
                    status: HTTP_CODE.UNAUTHORIZE 
                })
            }
        }
    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    } finally {
        next()
    }
    
    
}

export default validateUsername