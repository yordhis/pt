const ThemeService = require('../../theme/themeService')
const btnAdapter = require('./btnAdapter')
const themeService = new ThemeService()

const libraryAdapter = async (datas, user) => {
  
  let dataAdapter = []
  
  for (const data of datas) {
    const theme = await themeService.filterById( data.idTheme )
    const buttons = await btnAdapter( user, data )

    dataAdapter.push({
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
    })
  }

  return await dataAdapter

}

module.exports = libraryAdapter