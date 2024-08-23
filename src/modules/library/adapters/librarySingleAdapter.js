const ThemeService = require('../../theme/themeService')
const btnAdapter = require('./btnAdapter')
const themeService = new ThemeService()

const librarySingleAdapter = async (data, user) => {

  const theme = await themeService.filterById(data.idTheme)
  const buttons = await btnAdapter( user, data )

  return {
    id: data._id,
    idTheme: theme._id,
    nameTheme: theme.name,
    title: data.title,
    description: data.description,
    links: user.rol != 'readertxt' ? data.links : null,
    views: data.views,
    buttons,
    author: data.author,
    credit: data.credit
  }
}

module.exports = librarySingleAdapter