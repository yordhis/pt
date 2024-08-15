/* eslint-disable no-unused-vars */
/** Paquetes de terceros */
const express = require('express')
const app = express()
const morgan = require('morgan')
const socket = require('socket.io')
const path = require('path')
const expressSession = require('express-session') 
require('dotenv').config()

/** Importamos la conexion a la base de datos */
const connection = require('./databases/mongo')

/** Importando los middleware personalizados */
const verifyToken = require('./middlewares/verifyToken')

/** Importamos nuestras rutas configuradas en el directorio @routers */
const userRouter = require('./routers/userRouter')
const authRouter = require('./routers/authRouter')
const dashboardRouter = require('./routers/dashboardRouter')
const webRouter = require('./routers/webRouter')

/** Le indicamos a nuetra app que lea las peticiones tipo @json */
/** Esto nos permite ver los datos enviados */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

/** Solo para desarrollo */
app.use(morgan('dev'))

/** Usamos las rutas importadas en nuestra app */
app.use('/', webRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/dashboard', dashboardRouter)

/**
 * @_SOCKET 
 */
const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

server.listen(3000, () => {
    console.log('Servidor corriendo en: http://localhost:3000')
})

module.exports = app

