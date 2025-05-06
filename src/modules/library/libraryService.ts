import Library from './libraryModel'
import {LibraryInterface} from './interfaces/Library.interface'
import LibraryServiceInterface from './interfaces/Library.service.interface'

class LibraryService implements LibraryServiceInterface {
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

    async register( data: LibraryInterface ){
        const library = new Library( data )
        return await library.save()
    }

    async update( id:string, data: LibraryInterface ){
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id: string ){
        const result =  await Library.deleteOne({ _id: id })
        return result ? true : false
    }
}

export default LibraryService