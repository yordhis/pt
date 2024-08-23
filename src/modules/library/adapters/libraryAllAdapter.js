const ThemeService = require('../../theme/themeService')
const themeService = new ThemeService()

const libraryAdapter = async (datas) => {
  
  let dataAdapter = []
  for (const data of datas) {
    const theme = await themeService.filterById( data.idTheme )
    dataAdapter.push({
      _id: data._id,
      idTheme: theme._id,
      nameTheme: theme.name,
      title: data.title,
      description: data.description,
      links: data.links,
      views: data.views,
      author: data.author,
      credit: data.credit,
    })
  }

  return await dataAdapter

}

module.exports = libraryAdapter