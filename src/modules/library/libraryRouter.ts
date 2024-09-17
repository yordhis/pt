const express = require('express')
const { all, filterById, register, update, destroy, filterByIdTheme } = require('./libraryController')
const validateThemeExists = require('./middlewares/validateThemeExists')
const validateThemeIsActive = require('./middlewares/validateThemeIsActive')
const validatePermissionsOfContent = require('./middlewares/validatePermissionsOfContent')
const validateNotRepitMultimediaInTheme = require('./middlewares/validateNotRepitMultimediaInTheme')
const router = express.Router()

const middTheme = [
    validateThemeExists,
    validateThemeIsActive,
    validatePermissionsOfContent
]




router.get('/', all)
router.get('/:id', filterById)
router.get('/theme/:id', filterByIdTheme)
router.post('/', [ middTheme, validateNotRepitMultimediaInTheme ], register)
router.put('/:id', middTheme, update)
router.delete('/:id', destroy)

module.exports = router
