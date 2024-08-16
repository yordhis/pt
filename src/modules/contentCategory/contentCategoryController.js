const ContentCategoryService = require('./contentCategoryService')
const contentCategoryService = new ContentCategoryService()


exports.all = async ( req, res ) => {
    try {
        const data = await contentCategoryService.all()
        res.status(200).json({ message: 'ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }

}

exports.filterById = async ( req, res ) => {
    try {
        const data = await contentCategoryService.filterById( req.params.id )
        res.status(200).json({ message: 'ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }

}

exports.register = async ( req, res ) => {
    try {
        await contentCategoryService.register(req.body)
        res.status(201).json({ message: 'Categoria de contenido registrado', status: 201 })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.update = async ( req, res ) => {
    try {
        const data = await contentCategoryService.update( req.params.id, req.body )
        res.status(200).json({ message: 'Categoria de contenido actualizada.', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
 

exports.destroy = async ( req, res ) => {
    try {
        await contentCategoryService.delete(req.params.id)
        res.status(200).json({ message: 'Categoria de contenido eliminada', status: 200 })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}


