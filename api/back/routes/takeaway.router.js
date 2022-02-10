const router = require('express').Router()

const {
  getTakeAway,
  getOneTakeAway,
  addTakeAway,
  editTakeAway,
  deleteTakeAway
} = require('../controllers/takeaway.controller')
const { checkAuth, checkAdmin } = require('../utils')

router.post('/', checkAuth, checkAdmin, addTakeAway)
router.get('/', getTakeAway)
router.get('/:productId', getOneTakeAway)
router.put('/:productId', checkAuth, checkAdmin, editTakeAway)
router.delete('/:productId', checkAuth, checkAdmin, deleteTakeAway)

module.exports = router
