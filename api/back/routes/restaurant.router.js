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
  deleteOneRestaurant,
  showMenu
} = require('../controllers/restaurant.controller')

const reservationRouter = require('./reservation.router')
router.use('/:restaurantId', reservationRouter)
router.post('/', checkAuth, checkAdmin, createRestaurant)
router.get('/', showAllRestaurants)
router.get('/:restaurantId', showOneRestaurant)
router.put('/:restaurantId', checkAuth, checkAdmin, editOneRestaurant)
router.delete('/:restaurantId', checkAuth, checkAdmin, deleteOneRestaurant)
router.get('/:restaurantId/menu', showMenu)


module.exports = router
