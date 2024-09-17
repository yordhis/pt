const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemeSchema = new Schema({
    name: String,
    image: String,
    contentPermission: Array,
    status: Number
})

const Theme = mongoose.model('Theme', ThemeSchema)

module.exports = Theme