const express = require('express')
const { all, filterById, register, update, destroy } = require('./themeController')
const validateNameTheme = require('./middlewares/validateNameTheme')
const router = express.Router()



router.get( '/', all )
router.get( '/:id', filterById )
router.post( '/', validateNameTheme ,register )
router.put( '/:id', validateNameTheme, update )
router.delete( '/:id', destroy )

module.exports = router