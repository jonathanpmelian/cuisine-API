const router = require('express').Router()

const {
  checkAuth
} = require('../utils/index')

const {
  viewMyProfile,
  editMyProfile,
  deleteMyProfile
} = require('../controllers/profile.controller')

const addressRouter = require('./address.router')

router.use('/address', addressRouter)

router.get('/', checkAuth, viewMyProfile)
router.put('/', checkAuth, editMyProfile)
router.delete('/', checkAuth, deleteMyProfile)

module.exports = router
