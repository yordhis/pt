const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserAuthSchema = new Schema({
    username: String,
    password: String,
    rolId: String
})

const UserAuth = mongoose.model('UserAuth', UserAuthSchema)

module.exports = UserAuth