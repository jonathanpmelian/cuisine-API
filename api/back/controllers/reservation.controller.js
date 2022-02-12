const ReservationModel = require('../models/reservation.model')
const RestaurantModel = require('../models/restaurant.model')
const UserModel = require('../models/user.model')

async function createReservation (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)
    req.body.restaurant = restaurant.id

    const reservation = await ReservationModel.create(req.body)
    await reservation.save()

    res.status(200).json(reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error making a reservation')
  }
}

async function showReservations (req, res) {
  try {
    const reservation = await ReservationModel.find({ restaurant: req.params.restaurantId })

    res.status(200).json(reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing reservations')
  }
}

async function deleteReservation (req, res) {
  try {
    await ReservationModel.findByIdAndDelete(req.params.reservationId)

    res.status(200).send('Reservation has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing reservations')
  }
}

async function editReservation (req, res) {
  try {
    const reservation = await ReservationModel.findByIdAndUpdate(req.params.reservationId, req.body, { new: true, runValidators: true })
    await reservation.save()

    res.status(200).send(reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error updating reservation')
  }
}

async function cancellReservation (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    const reservation = await ReservationModel.findById(req.params.reservationId)

    if (user && Date.now() < reservation.validUntil) {
      await RestaurantModel.findById(req.params.reservationId)
      return res.status(200).json('Reservation has been deleted')
    } else {
      res.status(200).send('You can not cancell')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('Error deliting reservation')
  }
}

module.exports = {
  createReservation,
  showReservations,
  deleteReservation,
  editReservation,
  cancellReservation
}
