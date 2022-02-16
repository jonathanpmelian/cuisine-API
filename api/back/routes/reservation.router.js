const router = require('express').Router({ mergeParams: true })

const {
  checkAuth,
  checkAdmin,
  checkIf
} = require('../utils')

const {
  createReservation,
  showReservations,
  showOneReservation,
  deleteReservation,
  editReservation
} = require('../controllers/reservation.controller')

router.post('/reservation', checkIf, createReservation)
router.get('/reservation', checkAuth, checkAdmin, showReservations)
router.get('/:reservation/:reservationId', checkAuth, checkAdmin, showOneReservation)
router.delete('/reservation/:reservationId', checkAuth, deleteReservation)
router.put('/reservation/:reservationId', checkAuth, checkAdmin, editReservation)

module.exports = router
