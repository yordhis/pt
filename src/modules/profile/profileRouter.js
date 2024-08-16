const express = require('express')
const { getProfile, createProfile, updateProfile, deleteProfile } = require('./profileController')
const router = express.Router()

router.get('/:userId', getProfile)
router.post('/', createProfile)
router.put('/:id', updateProfile)
router.delete('/:id', deleteProfile)

module.exports = router