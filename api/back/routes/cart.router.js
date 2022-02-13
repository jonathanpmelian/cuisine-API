const router = require('express').Router()

const {
  checkAuth
} = require('../utils/index')

const {
  addProductToCart,
  viewMyCart,
  deleteCartProduct
} = require('../controllers/cart.controller')

router.post('/:productId', checkAuth, addProductToCart)
router.get('/', checkAuth, viewMyCart)
router.delete('/:cartId/:productId', checkAuth, deleteCartProduct)

module.exports = router
