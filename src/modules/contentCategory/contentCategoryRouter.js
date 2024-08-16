const express = require('express')
const { register, all, filterById, destroy, update } = require('./contentCategoryController')
const validateNameContentCategory = require('./middlewares/validateNameContntCategory')
const router = express.Router()


router.post('/', validateNameContentCategory, register)
router.put('/:id', validateNameContentCategory, update)
router.delete('/:id', destroy)
router.get('/', all)
router.get('/:id', filterById)


module.exports = router