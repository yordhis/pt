import Library from './libraryModel'
import { User } from '../auth/interfaces/User.interface'
import LibraryInterface from './interfaces/Library.interface'

class LibraryService {

    async register( data: LibraryInterface ){
        const library = new Library( data )
        return await library.save()
    }

    async all(){
        return await Library.find({}) 
    }

    async filterById( id: string ){
        return await Library.findOne({ _id: id })
    }
    
    async filterByIdTheme( idTheme: string ){
        return await Library.find({ idTheme })
    }

    async filterByTitle( title: string ){
        return await Library.findOne({ title })
      
    }

    async filterByTitleAndByTheme( title: string, theme: string ){
        return await Library.findOne({ title, theme })
    }
    
    async update( id: string, data: LibraryInterface ){
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id: string ){
        return await Library.deleteOne({ _id: id })
    }
}

export default LibraryService