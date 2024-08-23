const RolService = require('../modules/rol/rolService')
const rolService = new RolService()

const veirifyPermissionOfRequestUser = async (req, res, next) => {
    try {
        const user = req.user
        const pathname = req.baseUrl.split('/')[2]
        const method = req.method

        const allRols = await rolService.all()

        for (const rol of allRols) {
            if (user.rol == rol.name) {
                if (!rol.modules.includes( pathname )) return res.status(401).json({ message: 'Acceso denegado a este módulo.', status: 401 })
                if (!rol.permissions.includes( method )) return res.status(401).json({ message: 'Acción denegada, no tiene permisos para ejecutar esta solicitud.', status: 401 })
                return next()
            }
        }

        res.status(401).json({ message: 'Acceso denegado, el rol que poseé no existe.'})

    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }



}

module.exports = veirifyPermissionOfRequestUser