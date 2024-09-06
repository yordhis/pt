const validateRolRegister = ( req, res, next ) => {
    switch (req.body.rol) {
        case 'admin':
            res.status(401).json({ message: 'Esta ruta no está autorizada para registrar usuario administrador', status: 401})
            break
        case 'reader':
        case 'creator':
            next()
            break
        default:
            res.status(401).json({ message: 'Rol invalido!', status: 401})
            break
    }
}

module.exports = validateRolRegister