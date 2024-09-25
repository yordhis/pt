// const btnAdapter = require('./btnAdapter')
import { UserAdapter } from '../../auth/interfaces/User.interface'
import { LibraryInterface } from '../interfaces/Library.interface'
import { LibrariesAdapterType } from '../types/Library.type'
import librarySingleAdapter from './librarySingleAdapter'

const libraryAdapter = async (datas:LibraryInterface[], user: UserAdapter): Promise< LibrariesAdapterType > => {
  let dataAdapter = []
  
  for (const data of datas) {
    let library = await librarySingleAdapter(data, user)
    if(library){
      dataAdapter.push( library )
    }
  }
  if(dataAdapter){
    return dataAdapter
  }else{
    return null
  }

}

export default libraryAdapter