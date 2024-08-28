/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/** Paquetes de terceros */
const express = require('express')
const app = express()
const morgan = require('morgan')
const socket = require('socket.io')
const path = require('path')

require('dotenv').config()

/** configuracion de la app */
app.set('port', process.env.APP_PORT)
app.set('host', process.env.APP_HOST)
app.set('app_name', process.env.APP_NAME)

/** Importamos la conexion a la base de datos */
const connection = require('./databases/mongo')

/** Importamos todas las rutas */
const routers = require('./routers/routers')


/** Le indicamos a nuetra app que lea las peticiones tipo @json */
/** Esto nos permite ver los datos enviados */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

/** Solo para desarrollo */
// app.use(morgan('dev'))

/** Usamos las rutas importadas en nuestra app */
app.use(routers)


/**
 * @_SOCKET 
 */
const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

server.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en: http://${app.get('host')}:${app.get('port')}`)
})

module.exports = app

