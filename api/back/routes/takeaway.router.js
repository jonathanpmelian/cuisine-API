const router = require('express').Router()

const { 
  checkAuth, 
  checkAdmin 
} = require('../utils')

const {
  showAllTakeaway,
  showOneTakeaway,
  createTakeaway,
  editOneTakeaway,
  deleteOneTakeaway
} = require('../controllers/takeaway.controller')

router.get('/', showAllTakeaway)
router.get('/:productId', showOneTakeaway)
router.post('/', checkAuth, checkAdmin, createTakeaway)
router.put('/:productId', checkAuth, checkAdmin, editOneTakeaway)
router.delete('/:productId', checkAuth, checkAdmin, deleteOneTakeaway)

module.exports = router
