const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
}  = require('../utils/index')

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
router.put('/:productId', updateOneProduct)
router.delete('/:productId', deleteProduct)

module.exports = router