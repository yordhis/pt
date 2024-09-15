/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/** Paquetes de terceros */
import express, { json, urlencoded } from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

/** configuracion de la app */
app.set("port", process.env.APP_PORT);
app.set("host", process.env.APP_HOST);
app.set("app_name", process.env.APP_NAME);

/** Importamos la conexion a la base de datos */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import connection from "/databases/mongo"

/** Importamos todas las rutas */
//import routers from "/routers/routers"

/** Le indicamos a nuetra app que lea las peticiones tipo @json */
/** Esto nos permite ver los datos enviados */
app.use(json())
app.use(urlencoded({ extended: false }))

/** Solo para desarrollo */
// app.use(morgan('dev'))

/** Usamos las rutas importadas en nuestra app */
//app.use(routers)


export default app
