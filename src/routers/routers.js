const express = require('express')
const router = express.Router()
const profileRouter = require('../modules/profile/profileRouter')
const authRouter = require('../modules/auth/authRouter')
const contentCategoryRouter = require('../modules/contentCategory/contentCategoryRouter')
const themeRouter = require('../modules/theme/themeRouter')
const rolRouter = require('../modules/rol/rolRouter')
const libraryRouter = require('../modules/library/libraryRouter')


router.use('/api/auth', authRouter)

router.use('/api/rols', rolRouter)
router.use('/api/themes', themeRouter)
router.use('/api/categories', contentCategoryRouter)
router.use('/api/profiles', profileRouter)
router.use('/api/libraries', libraryRouter)

// const verifyToken = require('../middlewares/verifyToken')

module.exports = router