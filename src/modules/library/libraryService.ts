import Library from './libraryModel'
import {LibraryInterface} from './interfaces/Library.interface'
import { LibrariesType, LibraryType } from './types/Library.type'

class LibraryService {

    async register( data: LibraryInterface ): Promise<LibraryType>{
        const library = new Library( data )
        return await library.save()
    }

    async all(): Promise<LibrariesType>{
        return await Library.find({}) 
    }

    async filterById( id: string ): Promise<LibraryType>{
        return await Library.findOne({ _id: id })
    }
    
    async filterByIdTheme( idTheme: string ): Promise<LibrariesType>{
        return await Library.find({ idTheme })
    }

    async filterByTitle( title: string ): Promise<LibraryType>{
        return await Library.findOne({ title })
      
    }

    async filterByTitleAndByTheme( title: string, theme: string ): Promise<LibraryType>{
        return await Library.findOne({ title, theme })
    }
    
    async update( id: string, data: LibraryInterface ): Promise<LibraryType>{
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id: string ): Promise<boolean>{
        const result =  await Library.deleteOne({ _id: id })
        return result ? true : false
    }
}

export default LibraryService