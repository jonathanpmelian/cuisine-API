const router = require('express').Router()

const {
  checkIf
} = require('../utils/index')

const {
  addProductToCart,
  viewMyCart,
  deleteCartProduct
} = require('../controllers/cart.controller')

router.post('/:productId', checkIf, addProductToCart)
router.get('/', checkIf, viewMyCart)
router.delete('/:cartId/:productId', checkIf, deleteCartProduct)

module.exports = router
