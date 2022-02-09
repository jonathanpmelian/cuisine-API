const router = require('express').Router()

const {
  getProfile,
  editProfile,
  deleteProfile
} = require('../controllers/profile.controller')

const checkAuth = require('../utils/index')

router.get('/', checkAuth, getProfile)
router.put('/', checkAuth, editProfile)
router.delete('/', checkAuth, deleteProfile)

module.exports = router
