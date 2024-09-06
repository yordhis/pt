const validateRolRegisterAdmin = (req, res, next) => {
    switch (req.body.rol) {
        case 'reader':
        case 'creator':
            res.status(401).json({ message: 'Esta ruta no está autorizada para registrar usuario lectores o creadores', status: 401 })
            break
        case 'admin':
            next()
            break
        default:
            res.status(401).json({ message: 'Rol invalido!', status: 401 })
            break
    }
}

module.exports = validateRolRegisterAdmin