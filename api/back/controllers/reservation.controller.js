const ReservationModel = require('../models/reservation.model')
const RestaurantModel = require('../models/restaurant.model')
const UserModel = require('../models/user.model')

async function createReservation (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId).populate('reservation')
    req.body.restaurant = restaurant.id

    const match = restaurant.reservation.filter(elem => 
    elem.year === req.body.year && elem.month === req.body.month && elem.day === req.body.day && elem.hour === req.body.hour)
    
    let sumPeep = match.reduce((p, c) => c.people +p, 0)
    
    sumPeep += req.body.people
    
    if(sumPeep < restaurant.hourCapacity) {
      const booking = await ReservationModel.create(req.body)
      await booking.save()

      restaurant.reservation.push(booking.id)
      await restaurant.save()

      if (res.locals.user !== undefined) {
        const user = await UserModel.findById(res.locals.user.id)
        if (user) {
          user.reservation.push(booking.id)
          await user.save()
        }
      }
      return res.status(200).json(booking)
    } else {
      res.status(200).send('Date unavailable or Reservations higher than 6 persons please call to the restaurant')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error making a reservation: ${err}`)
  }
}

async function showReservations (req, res) {
  try {
    const reservation = await ReservationModel.find({ restaurant: req.params.restaurantId }).populate({ path: 'restaurant', select: 'name' })

    res.status(200).json(reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing reservations')
  }
}

async function showOneReservation (req, res) {
  try {
    const reservation = await ReservationModel.findById(req.params.reservationId).populate({ path: 'restaurant', select: 'name' })

    res.status(200).json(reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing reservation')
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

async function deleteReservation (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    const reservation = await ReservationModel.findById(req.params.reservationId)
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)
    const userIndex = user.reservation.findIndex(elem => elem._id.toString() === reservation.id)
    const restaurantIndex = restaurant.reservation.findIndex(elem => elem._id.toString() === reservation.id)

    if (user.role === 'Admin') {
      user.reservation.splice(userIndex, 1)
      restaurant.reservation.splice(restaurantIndex, 1)
      await ReservationModel.findByIdAndRemove(req.params.reservationId)
      await user.save()
      await restaurant.save()

      return res.status(200).send('Reservation has been deleted')
    } else if (user && Date.now() < reservation.validUntil) {
      user.reservation.splice(userIndex, 1)
      restaurant.reservation.splice(restaurantIndex, 1)
      await ReservationModel.findByIdAndRemove(req.params.reservationId)
      await user.save()
      await restaurant.save()

      return res.status(200).send('Reservation has been deleted')
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
  showOneReservation,
  deleteReservation,
  editReservation
}
