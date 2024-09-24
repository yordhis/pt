import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"

import ThemeService from '../../theme/themeService'
const themeService = new ThemeService()

const validateThemeExists: Midd = async ( req, res, next ) => {
    try {
        const { theme } = req.body
        
        const themeExists = await themeService.filterByName( theme )
        if( !themeExists ) return res.status(HTTP_CODE.BAD_REQUEST).json({ 
            message: 'La temática no existe, intente con otra.', 
            status: HTTP_CODE.BAD_REQUEST 
        })
        next()
        
    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: 'Midd Theme exist. error' + error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    }
}

export default validateThemeExists