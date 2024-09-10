const mongoose = require('mongoose')
const  { mongodb, mongodbsrv } = require('../config')
require('dotenv').config()

/** 
 * Validamos si esta en desarollo o producción para conectarnos a la DB de la nube
 * @value true -> esta en desarrollo o local
 * @value false -> esta en producción
*/

try {
    
    let connectionStringConfig = ''
    
    if(process.env.APP_DEBUG){
        connectionStringConfig = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`
    }else{
        connectionStringConfig = `mongodb://${mongodbsrv.user}:${mongodbsrv.password}@${mongodbsrv.host}:${mongodbsrv.port}`
    }
    ( async (uri)=>{
        const connection = await mongoose.connect(uri)
        module.exports = connection

    })(connectionStringConfig)

} catch (error) {
    console.log('Error al conectarse. error: ' + error.message)
}


