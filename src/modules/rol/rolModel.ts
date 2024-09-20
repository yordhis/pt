import mongoose from 'mongoose'
import RolInterface from './interfaces/Rol.interface'
const Schema = mongoose.Schema

const RolSchema = new Schema({
    name: String,
    permissions: Array,
    modules: Array
})

const Rol = mongoose.model('Rol', RolSchema)

export default Rol