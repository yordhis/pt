const express = require('express')
const router = express.Router()
const profileRouter = require('../modules/profile/profileRouter')
const authRouter = require('../modules/auth/authRouter')
const contentCategoryRouter = require('../modules/contentCategory/contentCategoryRouter')
const themeRouter = require('../modules/theme/themeRouter')
const rolRouter = require('../modules/rol/rolRouter')
const libraryRouter = require('../modules/library/libraryRouter')
const verifyToken = require('../middlewares/verifyToken')
const veirifyPermissionOfRequestUser = require('../middlewares/verifyPermissionOfRequestUser')

const permissionOfUser = [
    verifyToken,
    veirifyPermissionOfRequestUser
]

router.use('/api/auth', authRouter)



router.use('/api/rols', permissionOfUser, rolRouter)
router.use('/api/themes', permissionOfUser, themeRouter)
router.use('/api/categories', permissionOfUser, contentCategoryRouter)
router.use('/api/profiles', permissionOfUser, profileRouter)
router.use('/api/libraries', permissionOfUser, libraryRouter)


module.exports = router