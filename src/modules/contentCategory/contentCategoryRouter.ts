import express from 'express'
import { register, all, filterById, destroy, update } from './contentCategoryController'
import validateNameContentCategory from './middlewares/validateNameContntCategory'
const router = express.Router()


router.post('/', validateNameContentCategory, register)
router.put('/:id', validateNameContentCategory, update)
router.delete('/:id', destroy)
router.get('/', all)
router.get('/:id', filterById)


module.exports = router