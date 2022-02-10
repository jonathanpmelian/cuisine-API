const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/index')

const {
  addProduct,
  viewAllProducts,
  viewOneProduct,
  updateOneProduct,
  deleteProduct
} = require('../controllers/shop.controller')

router.post('/', checkAuth, checkAdmin, addProduct)
router.get('/', viewAllProducts)
router.get('/:productId', viewOneProduct)
router.put('/:productId', checkAuth, checkAdmin, updateOneProduct)
router.delete('/:productId', checkAuth, checkAdmin, deleteProduct)

module.exports = router
