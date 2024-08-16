const express = require('express')
const { all, filterById, register, update, destroy } = require('./themeController')
const validateNameTheme = require('./middlewares/validateNameTheme')
const validateUpdateNameTheme = require('./middlewares/validateUpdateNameTheme')
const validatePermissionContentCategory = require('./middlewares/validatePermissionContentCategory')
const router = express.Router()



router.get( '/', all )
router.get( '/:id', filterById )
router.post( '/', [ validateNameTheme, validatePermissionContentCategory ], register )
router.put( '/:id', [ validateUpdateNameTheme, validatePermissionContentCategory ], update )
router.delete( '/:id', destroy )

module.exports = router