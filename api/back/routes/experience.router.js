const router = require('express').Router()

const { checkAuth, checkAdmin } = require('../utils')
const {
  addExperience,
  viewAllExperiences,
  viewOneExperience,
  updateOneExperience,
  deleteExperience
} = require('../controllers/experience.controller')

router.post('/', checkAuth, checkAdmin, addExperience)
router.get('/', viewAllExperiences)
router.get('/:productId', viewOneExperience)
router.put('/:productId', checkAuth, checkAdmin, updateOneExperience)
router.delete('/:productId', checkAuth, checkAdmin, deleteExperience)

module.exports = router
