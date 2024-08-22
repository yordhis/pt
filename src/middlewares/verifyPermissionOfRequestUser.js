const RolService = require('../modules/rol/rolService')
const rolService = new RolService()

const veirifyPermissionOfRequestUser = async (req, res, next) => {
    try {
        const user = req.user
        console.log(req.user)
        console.log(req.path)
        console.log(req.method)
        console.log(req.baseUrl)
    
        const allRols = await rolService.all()
        allRols.forEach(rol => {
            if(user.rol == rol){
                user.modules.forEach( modul => {
                    if( !rol.modules.includes(modul) ) return res.status(401).json({ message: 'Acceso denegado a este módulo.', status:401 })
    
                })
                user.permissions.forEach( permission => {
                    if( !rol.permissions.includes(permission) ) return res.status(401).json({ message: 'Acceso denegado a este módulo.', status:401 })
                })    
                next()
            }
        })
        
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }

    
    
}

module.exports = veirifyPermissionOfRequestUser