const ThemeService = require('../../theme/themeService')
const themeService = new ThemeService()

const validateThemeExists = async ( req, res, next ) => {
    try {
        const { theme } = req.body
        
        const themeExists = await themeService.filterByName( theme )
        if( !themeExists ) return res.status(400).json({ message: 'La temática no existe, intente con otra.', status: 400 })
        next()
        
    } catch (error) {
        res.status(500).json({ message: 'Midd Theme exist. error' + error.message, status: 500 })
    }
}

module.exports = validateThemeExists