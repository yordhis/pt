import express from 'express'
import { all, filterById, register, update, destroy, filterByIdTheme } from './libraryController'
import validateThemeExists from './middlewares/validateThemeExists'
import validateThemeIsActive from './middlewares/validateThemeIsActive'
import validatePermissionsOfContent from './middlewares/validatePermissionsOfContent'
import validateNotRepitMultimediaInTheme from './middlewares/validateNotRepitMultimediaInTheme'
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

export default router
