const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = new Schema({
    username: String,
    message: String,
    date: Date
})

const Chat = mongoose.model('Chat', ChatSchema)

module.exports = Chat