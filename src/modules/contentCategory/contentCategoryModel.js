const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContentCategorySchema = new Schema({
    name: String,
    status: String
})

const ContentCategory = mongoose.model('ContentCategory', ContentCategorySchema)

module.exports = ContentCategory