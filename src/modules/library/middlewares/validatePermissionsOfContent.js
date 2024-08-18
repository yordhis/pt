const ThemeService = require('../../theme/themeService')
const themeService = new ThemeService()

const validatePermissionsOfContent = async ( req, res, next ) => {
    try {
        const { idTheme, links } = req.body
        
        const theme = await themeService.filterById( idTheme )

        for (const key in links) {
           if(!theme.contentPermission.includes(key)) return res.status(401).json({ message: `No se puede crear el multimedia porque incumple con los permisos de contenido la temática. Contenido no permitido: ${key}`, status: 401 })
        }
        next()
        
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

module.exports = validatePermissionsOfContent