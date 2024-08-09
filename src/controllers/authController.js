const AuthService = require('../services/authService')
const authService = new AuthService()
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
      
        let result = await authService.register(req.body)
        console.log(result)
        
        res.status(201).render('index', {result, message: 'Usuario administrador registrado' } )
        // res.status(201).json({message: "Usuario administrador registrado"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.login = async ( req, res ) => {
    try {
        const { email, password } = req.body

        /** Obtenemos los datos del usuario */
        const user = await authService.filterByEmail(email)
    
        /** Validamos que el correo este registrado y */
        if (!user) return res.status(401).render('index', {message: 'Email no registrado'})

        /** validamos la contraseña */
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if(!passwordMatch) return res.status(401).render('index', {message: 'Contraseña invalida!'})
        
        /** Express session */
        req.session.email = email
        
        /** Configuramos el payload  */
        // const payload = { email:user.email } 

        /** Generamos el token */
        // const token = await authService.genrateToken(payload)

        /** 
         * Asignamos el token a la variable global @var req en la 
         * nueva propiedad @user
         */
        // req.user = token

        /** Respuesta es redirigir a otra ruta */
        res.redirect('/chat')

        /** Respuesta enviamos el token */
        // res.status(200).send(token)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    

}

exports.logout = ( req, res ) => {
    try {
        if(req.session.email) {
            delete req.session.email
            res.status(200).render('index', { message: 'Cierre de sesión exitoso' })
        }else{
            res.status(404).render('index', { message: 'No se encontró una sesión' })
        }
    } catch (error) {
        res.status(500).render('index', { message: `Error del servicodor. Error: ${error.message}` })
    }
 
}
