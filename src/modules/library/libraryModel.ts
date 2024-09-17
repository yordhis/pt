const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
    theme: String,
    title: String,
    description: String,
    links: Object,
    views: Number,
    author: String,
    credit: String
})

const Library = mongoose.model('Library', LibrarySchema)

module.exports = Library