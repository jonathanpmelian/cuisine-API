const router = require('express').Router({ mergeParams: true })

const { checkAuth, checkAdmin } = require('../utils')

const {
    createReservation,
    showReservations,
    deleteReservation,
    editReservation,
    cancellReservation
} = require('../controllers/reservation.controller')


router.post('/reservation', checkAuth, createReservation)
router.get('/reservation', checkAuth, showReservations)
router.delete('/reservation/:reservationId', checkAuth, cancellReservation)
router.delete('/reservation/:reservationId', checkAuth, checkAdmin, deleteReservation)
router.put('/reservation/:reservationId', checkAuth, editReservation)


module.exports = router

