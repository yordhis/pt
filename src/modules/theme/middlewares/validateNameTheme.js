const ThemeService = require('../themeService')
const themeService = new ThemeService()

const validateNameTheme = async ( req, res, next ) => {
    const { name } = req.body
    const thereIsTheme = await themeService.filterByName( name )
    if( thereIsTheme ){
        if(thereIsTheme.name == name) next()
        return res.status(401).json({ message: 'El nombre de la temática ya existe', status: 401 })
    } 
    next()
    
} 

module.exports = validateNameTheme