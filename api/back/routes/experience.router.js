const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils')

const {
  createExperience,
  showAllExperiences,
  showOneExperience,
  editOneExperience,
  deleteOneExperience
} = require('../controllers/experience.controller')

router.post('/', checkAuth, checkAdmin, createExperience)
router.get('/', showAllExperiences)
router.get('/:productId', showOneExperience)
router.put('/:productId', checkAuth, checkAdmin, editOneExperience)
router.delete('/:productId', checkAuth, checkAdmin, deleteOneExperience)

module.exports = router
