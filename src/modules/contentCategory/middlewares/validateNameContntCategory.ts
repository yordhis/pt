const ContentCategoryService = require('../contentCategoryService')
const contentCategoryService = new ContentCategoryService()

const validateNameContentCategory = async ( req, res, next ) => {
    let result = await contentCategoryService.filterByName( req.body.name )
    console.log(result)
    
    if(result){
        return res.status(401).json({ message: 'El nombre de la categorias de contenido ya existe', status: 401 })
    }
    next()
}

module.exports = validateNameContentCategory