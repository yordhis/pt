const validateRolRegisterAdmin = (req, res, next) => {
    switch (req.body.rol) {
        case 'reader':
        case 'creator':
            res.status(401).json({ message: 'This route does not allow registration of readers and creators', status: 401 })
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