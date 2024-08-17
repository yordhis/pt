const AuthService = require('./authService')
const authService = new AuthService()
const bcrypt = require('bcrypt')

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
        const { username, password, email } = req.body

        /** Obtenemos los datos del usuario */
        let user = await authService.filterByUsername(username)
        /** Validamos que el correo este registrado y */
        if ( !user ) {
            user = await authService.filterByEmail( email )
            if( !user ) return res.status(401).json({ message: 'Usuario o email invalidos', status: 401 })
        }

        /** validamos la contraseña */
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) return res.status(401).json({ message: 'Contraseña invalida!', status: 401 })

        /** Configuramos el payload  */
        const payload = { 
            username: user.username, 
            email: user.email, 
            rol: user.rol }

        /** Generamos el token */
        const token = await authService.genrateToken(payload)

        req.user = token


        /** Respuesta enviamos el token */
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

