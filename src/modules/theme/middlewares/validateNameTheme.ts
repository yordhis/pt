import HTTP_CODE from '../../../constants/code.const'
import { Midd } from '../../../interfaces/main'
import ThemeService from '../themeService'
const themeService = new ThemeService()

const validateNameTheme: Midd = async ( req, res, next ) => {
    const { name } = req.body
    const thereIsTheme = await themeService.filterByName( name )
    if( thereIsTheme ){
        return res.status(HTTP_CODE.BAD_REQUEST).json({ message: 'El nombre de la temática ya existe', 
            status: HTTP_CODE.BAD_REQUEST 
        })
    } 
    next()
    
} 

export default validateNameTheme