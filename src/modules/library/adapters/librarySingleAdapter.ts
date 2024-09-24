import { UserAdapter } from '../../auth/interfaces/User.interface'
import { LibraryInterface } from '../interfaces/Library.interface'
import { LibraryAdapterType } from '../types/Library.type'
import btnAdapter from './btnAdapter'

const librarySingleAdapter = async ( data: LibraryInterface, user: UserAdapter ): Promise<LibraryAdapterType> => {
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

export default librarySingleAdapter