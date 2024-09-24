import HTTP_CODE from '../../../constants/code.const'
import { Midd } from '../../../interfaces/main'
import ContentCategoryService from '../../contentCategory/contentCategoryService'
const contentCategoryService = new ContentCategoryService()

const validatePermissionContentCategory: Midd = async ( req, res ,next ) => {
    try {
        const { contentPermission } = req.body
        let capture = []
        for (let i = 0; i < contentPermission.length; i++) {
            const namePermission = contentPermission[i]
            const permission = await contentCategoryService.filterByName( namePermission )
            if( !permission ){
                capture.push(namePermission)
            }
        }

        if(capture.length){
            return res.status(HTTP_CODE.BAD_REQUEST).json({ 
                message: `El permiso <${ capture.join() }> asignado, no está registrado en el sistema.`, 
                status: HTTP_CODE.BAD_REQUEST 
            })
        }
        
        next()
        
    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR
        })
    }


}

export default validatePermissionContentCategory