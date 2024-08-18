const LibraryService = require('../libraryService')
const libraryService = new LibraryService()

const validateNotRepitMultimediaInTheme = async ( req, res , next ) => {
    try {
        const { title, idTheme } = req.body

        const existsInTheme = await libraryService.filterByTitle( title )
        if( existsInTheme ){
            if( existsInTheme.idTheme.includes(idTheme) ) return res.status(400).json({ message:'El titulo del multimedia ya existe en esta temática.', status:400 })
        }

        next()
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

module.exports = validateNotRepitMultimediaInTheme