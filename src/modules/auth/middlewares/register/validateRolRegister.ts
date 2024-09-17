const validateRolRegister = ( req, res, next ) => {
    switch (req.body.rol) {
        case 'admin':
            res.status(401).json({ message: 'This route does not allow registration of user admin', status: 401})
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