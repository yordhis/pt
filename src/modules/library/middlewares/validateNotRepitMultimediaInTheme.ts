import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"

import LibraryService from '../libraryService'
const libraryService = new LibraryService()

const validateNotRepitMultimediaInTheme: Midd = async ( req, res , next ) => {
    try {
        const { title, theme } = req.body
    
        const existsInTheme = await libraryService.filterByTitleAndByTheme( title, theme )
    
        if( existsInTheme ){
            if( existsInTheme.theme.includes(theme) ) return res.status(HTTP_CODE.BAD_REQUEST).json({ 
                message:'El titulo del multimedia ya existe en esta temática.', 
                status:HTTP_CODE.BAD_REQUEST 
            })
        }

        next()
    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: 'Midd Not repit. Error: ' + error.message, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    }
}

export default validateNotRepitMultimediaInTheme