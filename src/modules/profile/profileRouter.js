const express = require('express')
const { getProfile, createProfile, updateProfile, deleteProfile } = require('./profileController')
const validateProfileExist = require('./middlewares/validateProfileExist')
const router = express.Router()



router.get('/', getProfile)
router.post('/', validateProfileExist, createProfile)
router.put('/', updateProfile)
router.delete('/', deleteProfile)

module.exports = router