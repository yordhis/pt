const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** 
 * Se crea una instancia de @const Schema con la config
 * de los campos que va tener el usuario y se asigna a
 * la @const UserSchema
 */
const UserSchema = new Schema({
    /** aqui van los campos que va a tener el usuario */
    name: String,
    lastname: String,
    phone: String,
    address: String
})

/** 
 * Se procede a crear el modelo @User 
 * con @var mongoose.model('nombrar_el_modelo', 'Esquema_del_modelo') 
 */
const User = mongoose.model('User', UserSchema)

/** Exportamos el modelo */
module.exports = User