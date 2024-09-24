import express from 'express'
import { all, filterById, register, update, destroy } from './themeController'
import validateNameTheme from './middlewares/validateNameTheme'
import validateUpdateNameTheme from './middlewares/validateUpdateNameTheme'
import validatePermissionContentCategory from './middlewares/validatePermissionContentCategory'
const router = express.Router()



router.get( '/', all )
router.get( '/:id', filterById )
router.post( '/', [ validateNameTheme, validatePermissionContentCategory ], register )
router.put( '/:id', [ validateUpdateNameTheme, validatePermissionContentCategory ], update )
router.delete( '/:id', destroy )

export default router