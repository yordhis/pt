const LibraryService = require('./libraryService')

exports.register = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.register( req.body )
        res.status(201).json({ message: 'Multimedia creado', status: 201, data })
    } catch (error) {
        res.status(500).json({ message: 'Controlador de registro, Error:' + error.message, status: 500 })
    }
}

exports.all = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.all()
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.filterById = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.filterById( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.filterByIdTheme = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.filterByIdTheme( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.update = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.update( req.params.id, req.body )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.destroy = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.destroy( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

