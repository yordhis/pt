const Library = require('./libraryModel')
const libraryAllAdapter = require('./adapters/libraryAllAdapter')
const librarySingleAdapter = require('./adapters/librarySingleAdapter')

class LibraryService {

    async register( data ){
        const library = new Library( data )
        return await library.save()
    }

    async all(){
        return await libraryAllAdapter( await Library.find({}) )
    }

    async filterById( id ){
        return await librarySingleAdapter( await Library.findOne({ _id: id }) )
    }
    
    async filterByIdTheme( idTheme ){
        return await libraryAllAdapter( await Library.find({ idTheme }) )
    }

    async filterByTitle( title ){
        return await librarySingleAdapter( await Library.findOne({ title }) )
    }
    
    async update( id, data ){
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id ){
        return await Library.deleteOne({ _id: id })
    }



}

module.exports = LibraryService