const RestaurantModel = require('../models/restaurant.model')

async function createRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.create(req.body)
    await restaurant.save()

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error creating restaurant: ${err}`)
  }
}

async function showAllRestaurants (req, res) {
  try {
    const restaurant = await RestaurantModel.find({}, { reservation: 0, hourCapacity: 0, totalCapacity: 0 })

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing all restaurants: ${err}`)
  }
}

async function showOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId, { reservation: 0, hourCapacity: 0, totalCapacity: 0 })

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one restaurant: ${err}`)
  }
}

async function editOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true, runValidators: true })

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error editing one restaurant: ${err}`)
  }
}

async function deleteOneRestaurant (req, res) {
  try {
    await RestaurantModel.findByIdAndDelete(req.params.restaurantId)

    res.status(200).json('Restaurant has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting one restautant: ${err}`)
  }
}

async function showOneRestaurantMenu (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)

    res.status(200).json(restaurant.menu)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing restaurant menu: ${err}`)
  }
}

module.exports = {
  createRestaurant,
  showAllRestaurants,
  showOneRestaurant,
  editOneRestaurant,
  deleteOneRestaurant,
  showOneRestaurantMenu
}
