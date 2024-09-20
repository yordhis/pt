import express from 'express'
import { all, filterById, register, update, destroy } from './rolController'
import validateNotRepitRol from './middlewares/validateNotRepitRol'
import validateNotRepitPermission from './middlewares/validateNotRepitPermission'
import validatePermission from './middlewares/validatePermission'
import validateNotRepitRolUpdate from './middlewares/validateNotRepitRolUpdate'
const router = express.Router()

const middRegister = [
    validateNotRepitRol,
    validatePermission,
    validateNotRepitPermission
]
const middUpdate = [
    validateNotRepitRolUpdate,
    validatePermission,
    validateNotRepitPermission
]

router.get('/', all)
router.get('/:id', filterById)
router.post('/', middRegister, register)
router.put('/:id', middUpdate, update)
router.delete('/:id', destroy)

export default router