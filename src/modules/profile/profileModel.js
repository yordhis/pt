const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    name: String,
    lastname: String,
    phone: String,
    address: String,
    userId: String
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile