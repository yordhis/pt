import HTTP_CODE from '../../../constants/code.const'
import { Midd } from '../../../interfaces/main'
import ThemeService from '../../theme/themeService'
const themeService = new ThemeService()

const validatePermissionsOfContent: Midd = async ( req, res, next ) => {
    try {
        const { theme, links } = req.body
        
        const them = await themeService.filterByName( theme )

        for (const key in links) {
            if(them){
                if(!them.contentPermission.includes(key)) return res.status(HTTP_CODE.UNAUTHORIZE).json({ 
                    message: `No se puede crear el multimedia porque incumple con los permisos de contenido la temática. Contenido no permitido: ${key}`, 
                    status: HTTP_CODE.UNAUTHORIZE 
                })
            }else{
                return res.status(HTTP_CODE.NOT_FOUND).json({
                    message: "No se encontro el tema seleccionado",
                    status: HTTP_CODE.NOT_FOUND
                })
            }
        }
        next()
        
    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: 'Midd Permissions content. Error:' + error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    }
}

export default validatePermissionsOfContent