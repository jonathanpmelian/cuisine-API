const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/index')

const {
  createOrder,
  showAllOrders,
  showOneOrder,
  editOneOrder,
  deleteOneOrder
} = require('../controllers/order.controller')

router.post('/', checkAuth, createOrder)
router.get('/', checkAuth, showAllOrders)
router.get('/:orderId', checkAuth, showOneOrder)
router.put('/:orderId', checkAuth, checkAdmin, editOneOrder)
router.delete('/:orderId', checkAuth, deleteOneOrder)

module.exports = router
