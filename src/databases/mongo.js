const mongoose = require('mongoose')
const  { mongodb, mongodbsrv } = require('../config')
require('dotenv').config()
let connectionStringConfig = ""

console.log(!process.env.APP_DEBUG);

/** 
 * Validamos si esta en desarollo o producción para conectarnos a la DB de la nube
 * @value true -> esta en desarrollo o local
 * @value false -> esta en producción
*/
if(true){
    connectionStringConfig = `mongodb://${mongodbsrv.user}:${mongodbsrv.password}@${mongodbsrv.host}:${mongodbsrv.port}`
}else{
    connectionStringConfig = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`
}
console.log(connectionStringConfig);
const connection = mongoose.connect(connectionStringConfig)
.then(res =>{
    console.log('Conexion exitosa')
}).catch(err =>{
    console.log('Error al conectarse. error: ' + err.message)
    // console.log(`mondodb://${db.host}:${db.port}/${db.database}`);
})

module.exports = connection

