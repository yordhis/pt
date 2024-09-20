import { User } from '../../auth/interfaces/User.interface'
import LibraryInterface from '../interfaces/Library.interface'
import btnAdapter from './btnAdapter'

const librarySingleAdapter = async ( data: LibraryInterface, user: User ) => {
  const buttons = await btnAdapter( data, user )
  if( !data ) return null
  return {
    id: data._id,
    theme: data.theme,
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