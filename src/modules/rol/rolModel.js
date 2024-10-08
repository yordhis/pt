const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolSchema = new Schema({
    name: String,
    permissions: Array,
    modules: Array
})

const Rol = mongoose.model('Rol', RolSchema)

module.exports = Rol