const AuthService = require('./authService')
const authService = new AuthService()

exports.register = async (req, res) => {
    try {
        await authService.register(req.body)
        res.status(201).json({ message: 'Usuario registrado', status: 201 })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        
        const payload = req.user
        const token = await authService.genrateToken( payload )
        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

