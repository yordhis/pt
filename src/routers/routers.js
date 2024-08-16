const express = require('express')
const router = express.Router()
const profileRouter = require('../modules/profile/profileRouter')
const authRouter = require('../modules/auth/authRouter')
const contentCategoryRouter = require('../modules/contentCategory/contentCategoryRouter')

router.use('/api/auth', authRouter)


// eslint-disable-next-line no-unused-vars
const verifyToken = require('../middlewares/verifyToken')
router.use('/api/categories', contentCategoryRouter)
router.use('/api/profiles', profileRouter)

module.exports = router