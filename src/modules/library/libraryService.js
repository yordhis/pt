const Library = require('./libraryModel')

class LibraryService {

    async register( data ){
        const library = new Library( data )
        return await library.save()
    }

    async all(){
        return await Library.find({})
    }

    async filterById( id ){
        return await Library.findOne({ _id: id })
    }
    
    async filterByIdTheme( idTheme ){
        return await Library.find({ idTheme })
    }

    async filterByName( title ){
        return await Library.find({ title })
    }
    
    async update( id, data ){
        return await Library.findByIdAndUpdate({ _id: id }, data )
    }

    async destroy( id ){
        return await Library.deleteOne({ _id: id })
    }



}

module.exports = LibraryService