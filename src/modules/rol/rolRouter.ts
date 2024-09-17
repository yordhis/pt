const express = require('express')
const { all, filterById, register, update, destroy } = require('./rolController')
const validateNotRepitRol = require('./middlewares/validateNotRepitRol')
const validateNotRepitPermission = require('./middlewares/validateNotRepitPermission')
const validatePermission = require('./middlewares/validatePermission')
const validateNotRepitRolUpdate = require('./middlewares/validateNotRepitRolUpdate')
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

module.exports = router