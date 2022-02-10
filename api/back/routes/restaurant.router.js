const router = require('express').Router()

const {
  createRestaurant,
  getAllRestaurants,
  getOneRestaurant,
  editRestaurant,
  deleteRestaurant
} = require('../controllers/restaurant.controller')
const {
  checkAdmin,
  checkAuth
} = require('../utils/index')

router.post('/', checkAuth, checkAdmin, createRestaurant)
router.get('/', getAllRestaurants)
router.get('/:restaurantId', getOneRestaurant)
router.put('/:restaurantId', checkAuth, checkAdmin, editRestaurant)
router.delete('/:restaurantId', checkAuth, checkAdmin, deleteRestaurant)

module.exports = router
