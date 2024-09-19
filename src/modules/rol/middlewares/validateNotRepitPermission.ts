const validateNotRepitPermission = (req, res, next) => {
    try {
        const { permissions } = req.body
        let capture = []
        console.log(permissions)
        for (let i = 0; i < permissions.length; i++) {
            const permission = permissions[i]
            let arrayFilter = permissions.filter(perm => perm === permission)
            if (arrayFilter.length > 1) capture.push( arrayFilter )
        }

        if(capture.length) return res.status(400).json({ message: 'Esta enviando permisos repetidos.', status: 400 })
        else next()
    } catch (error) {
        return res.status(500).json({ message: error.messsage, status: 500 })
    }
}

module.exports = validateNotRepitPermission