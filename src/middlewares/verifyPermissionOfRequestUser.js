const RolService = require('../modules/rol/rolService')
const rolService = new RolService()

const veirifyPermissionOfRequestUser = async (req, res, next) => {
    console.log(req.user)
    console.log(req.path)
    console.log(req.method)
    console.log(req.baseUrl)

    const allRols = await rolService.all()
    
    
    next()
}

module.exports = veirifyPermissionOfRequestUser