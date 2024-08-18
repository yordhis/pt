const ThemeService = require('../../theme/themeService')
const themeService = new ThemeService()

const validateThemeIsActive = async ( req, res, next ) => {
    try {
        const { idTheme } = req.body
        
        const themeIsActive = await themeService.filterById( idTheme )
        if( !themeIsActive.status ) return res.status(400).json({ message: 'La temática no está activa, intente con otra.', status: 400 })
        next()
        
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

module.exports = validateThemeIsActive