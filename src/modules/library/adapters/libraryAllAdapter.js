// const btnAdapter = require('./btnAdapter')
const librarySingleAdapter = require('./librarySingleAdapter')

const libraryAdapter = async (datas, user) => {
  
  let dataAdapter = []
  
  for (const data of datas) {

    dataAdapter.push( await librarySingleAdapter(data, user) )
   
  }

  return await dataAdapter

}

module.exports = libraryAdapter