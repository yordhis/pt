const ContentCategoryService = require('../../contentCategory/contentCategoryService')
const contentCategoryService = new ContentCategoryService()

const validatePermissionContentCategory = async ( req, res ,next ) => {
    try {
        const { contentPermission } = req.body
        let capture = []
        for (let i = 0; i < contentPermission.length; i++) {
            const namePermission = contentPermission[i]
            const permission = await contentCategoryService.filterByName( namePermission )
            if( !permission ){
                capture.push(namePermission)
            }
        }
        if(capture.length){
            return res.status(401).json({ message: `El permiso <${ capture.join() }> asignado, no está registrado en el sistema.`, status: 401 })
        }else{
            next()
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500 })
    }


}

module.exports = validatePermissionContentCategory