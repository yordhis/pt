import express from 'express'
const router = express.Router()
// import profileRouter from '../modules/profile/profileRouter'
import authRouter from '../modules/auth/authRouter'
import contentCategoryRouter from '../modules/contentCategory/contentCategoryRouter'
// import themeRouter from '../modules/theme/themeRouter'
// import rolRouter from '../modules/rol/rolRouter'
// import libraryRouter from '../modules/library/libraryRouter'
import verifyToken from '../middlewares/verifyToken'
import veirifyPermissionOfRequestUser from '../middlewares/verifyPermissionOfRequestUser'
// import configRouter from '../modules/config/configRouter'

const permissionOfUser = [
    verifyToken,
    veirifyPermissionOfRequestUser
]

// router.use('/api/config', configRouter)
router.use('/api/auth', authRouter)

// router.use('/api/rols', permissionOfUser, rolRouter)
// router.use('/api/themes', permissionOfUser, themeRouter)
// router.use('/api/categories', permissionOfUser, contentCategoryRouter)
// router.use('/api/profiles', permissionOfUser, profileRouter)
// router.use('/api/libraries', permissionOfUser, libraryRouter)


export default router