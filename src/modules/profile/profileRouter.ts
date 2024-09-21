import express from 'express'
import { getProfile, createProfile, updateProfile, deleteProfile } from './profileController'
import validateProfileExist from './middlewares/validateProfileExist'
const router = express.Router()



router.get('/', getProfile)
router.post('/', validateProfileExist, createProfile)
router.put('/', updateProfile)
router.delete('/', deleteProfile)

module.exports = router