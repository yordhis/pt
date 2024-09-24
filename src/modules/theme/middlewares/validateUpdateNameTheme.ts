import HTTP_CODE from '../../../constants/code.const'
import { Midd } from '../../../interfaces/main'
import ThemeService from '../themeService'
const themeService = new ThemeService()

const validateUpdateNameTheme: Midd = async ( req, res, next ) => {
    const { name } = req.body
    const id = req.params.id
    try {
        const thereIsThemeId = await themeService.filterById( id )
        const thereIsThemeName = await themeService.filterByName( name )
        if(thereIsThemeId){
            if( thereIsThemeName ){
                if( thereIsThemeName.name == thereIsThemeId.name ) return next()
                return res.status(HTTP_CODE.BAD_REQUEST).json({ 
                    message: 'El nombre de la temática ya existe', 
                    status: HTTP_CODE.BAD_REQUEST 
                })
            } 
        }else{
            return res.status(HTTP_CODE.NOT_FOUND).json({
                message: "Temática no encontrada",
                status: HTTP_CODE.NOT_FOUND
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

export default validateUpdateNameTheme