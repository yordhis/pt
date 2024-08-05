/** 
 * Requerimos los paquetes y framework a usar en nuestra app
 */
const express = require('express')
const app = express()
const morgan = require('morgan')
const socket = require('socket.io')
const path = require('path')
const expressSession = require('express-session') 

/** Importando los middleware personalizados */
const userLogged = require('./middlewares/userLogged')

/** Importamos nuestras rutas configuradas en el directorio @routers */
const userRouter = require('./routers/userRouter')
const authRouter = require('./routers/authRouter')
const dashboardRouter = require('./routers/dashboardRouter')
const webRouter = require('./routers/webRouter')

/** Importamos la conexion a la base de datos */
const connection = require('./databases/mongo')

/** Manejo de sessiones con el pack @express_session */
app.use(expressSession({
    secret: "secret-key"
}))

/** Le indicamos a nuetra app que lea las peticiones tipo @json */
app.use(express.json())

/** Usando middleware de terceros @var morgan */
app.use(morgan('dev'))

/** Configuración del motor de plantillas */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/** Esto nos permite ver los datos enviados */
app.use(express.urlencoded({extended:false}))


/** Usando middleware personalizados de forma global para la app */
// app.use(userLogged)

/** Usamos las rutas importadas en nuestra app */
app.use('/', webRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/dashboard', dashboardRouter)

/**
 * @_SOCKET
 * Para configurar un web socket se require:
 * 1. Crear un servidor HTTP
 * 2. Reutilizar el servidor creado @var app dentro del 
 *    @method createServer(app) y almacenar en una @const server
 * 3. Despues le pasamos como @param server al @pack socket y
 *    lo almacenamos en @var io
 * 4. Ejecutamos nuestro @method socket pasando el @arg io
 */
const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

server.listen(3000, () => {
    console.log(`Servidor corriendo en: http://localhost:3000`);
})

module.exports = app

