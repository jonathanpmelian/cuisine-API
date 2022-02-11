const router = require('express').Router()

const {
  checkAdmin,
  checkAuth
} = require('../utils/index')

const {
  createRestaurant,
  showAllRestaurants,
  showOneRestaurant,
  editOneRestaurant,
  deleteOneRestaurant
} = require('../controllers/restaurant.controller')

router.post('/', checkAuth, checkAdmin, createRestaurant)
router.get('/', showAllRestaurants)
router.get('/:restaurantId', showOneRestaurant)
router.put('/:restaurantId', checkAuth, checkAdmin, editOneRestaurant)
router.delete('/:restaurantId', checkAuth, checkAdmin, deleteOneRestaurant)

module.exports = router
