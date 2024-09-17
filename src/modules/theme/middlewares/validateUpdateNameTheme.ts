const ThemeService = require('../themeService')
const themeService = new ThemeService()

const validateUpdateNameTheme = async ( req, res, next ) => {
    const { name } = req.body
    const id = req.params.id
    try {
        const thereIsThemeId = await themeService.filterById( id )
        const thereIsThemeName = await themeService.filterByName( name )
        if( thereIsThemeName ){
            if( thereIsThemeName.name == thereIsThemeId.name ) return next()
            return res.status(401).json({ message: 'El nombre de la temática ya existe', status: 401 })
        } 
        
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500 })
    }
    
} 

module.exports = validateUpdateNameTheme