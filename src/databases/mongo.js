const mongoose = require('mongoose')
const  db = require('../config')

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
.then(res =>{
    console.log('Conexion exitosa')
}).catch(err =>{
    console.log('Error al conectarse. error: ' + err.message)
    // console.log(`mondodb://${db.host}:${db.port}/${db.database}`);
})

module.exports = connection

