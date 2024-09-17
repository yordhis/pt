import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserAuthSchema = new Schema({
    username: String,
    email: String,
    password: String,
    rol: String
})

const UserAuth = mongoose.model('UserAuth', UserAuthSchema)

module.exports = UserAuth