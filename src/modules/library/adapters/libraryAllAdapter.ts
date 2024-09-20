// const btnAdapter = require('./btnAdapter')
import { User } from '../../auth/interfaces/User.interface'
import LibraryInterface from '../interfaces/Library.interface'
import librarySingleAdapter from './librarySingleAdapter'

const libraryAdapter = async (datas:[LibraryInterface], user: User): Promise<[LibraryInterface]> => {
  let dataAdapter = []
  
  for (const data of datas) {
    dataAdapter.push( await librarySingleAdapter(data, user) )
  }

  return dataAdapter

}

module.exports = libraryAdapter