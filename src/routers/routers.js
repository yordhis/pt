const express = require('express')
const router = express.Router()
const profileRouter = require('../modules/profile/profileRouter')
const authRouter = require('../modules/auth/authRouter')
const contentCategoryRouter = require('../modules/contentCategory/contentCategoryRouter')
const themeRouter = require('../modules/theme/themeRouter')

router.use('/api/auth', authRouter)

router.use('/api/themes', themeRouter)
router.use('/api/categories', contentCategoryRouter)
router.use('/api/profiles', profileRouter)

// const verifyToken = require('../middlewares/verifyToken')

module.exports = router