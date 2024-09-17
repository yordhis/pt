const LibraryService = require('../libraryService')

const validateNotRepitMultimediaInTheme = async ( req, res , next ) => {
    try {
        const { title, theme } = req.body
        const libraryService = new LibraryService(req.user)

        const existsInTheme = await libraryService.filterByTitleAndByTheme( title, theme )
        console.log(existsInTheme)
        
        if( existsInTheme ){
            console.log(existsInTheme.theme)
            if( existsInTheme.theme.includes(theme) ) return res.status(400).json({ message:'El titulo del multimedia ya existe en esta temática.', status:400 })
        }

        next()
    } catch (error) {
        res.status(500).json({ message: 'Midd Not repit. Error: ' + error.message, status: 500 })
    }
}

module.exports = validateNotRepitMultimediaInTheme