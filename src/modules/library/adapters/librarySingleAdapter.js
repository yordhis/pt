const ThemeService = require('../../theme/themeService')
const themeService = new ThemeService()

const libraryAdapter = async ( data ) => {
    const theme = await themeService.filterById(data.idTheme)

    return {    
            idTheme: theme._id,
            nameTheme: theme.name,
            title: data.title,
            description: data.description,
            links: data.links,
            views: data.views,
            author: data.author
          }
    
}

module.exports = libraryAdapter