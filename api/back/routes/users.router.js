const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/index')

const {
  showAllUsers,
  editOneUserRole, 
  deleteOneUserProfile
}= require('../controllers/users.controller')

router.get('/', checkAuth, checkAdmin, showAllUsers)
router.put('/:userId', checkAuth, checkAdmin, editOneUserRole )
router.delete('/:userId', checkAuth, checkAdmin, deleteOneUserProfile)

module.exports = router