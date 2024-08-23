const Library = require('./libraryModel')
const libraryAllAdapter = require('./adapters/libraryAllAdapter')
const librarySingleAdapter = require('./adapters/librarySingleAdapter')

class LibraryService {

    async register( data ){
        const library = new Library( data )
        return await library.save()
    }

    async all(){
        const data = await Library.find({}) 
        return await libraryAllAdapter( data )
    }

    async filterById( id ){
        const data = await Library.findOne({ _id: id })
        return await librarySingleAdapter( data )
    }
    
    async filterByIdTheme( idTheme ){
        const data = await Library.find({ idTheme })
        return await libraryAllAdapter( data )
    }

    async filterByTitle( title ){
        const data = await Library.findOne({ title })
        return await librarySingleAdapter( data )
    }
    
    async update( id, data ){
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id ){
        return await Library.deleteOne({ _id: id })
    }



}

module.exports = LibraryService