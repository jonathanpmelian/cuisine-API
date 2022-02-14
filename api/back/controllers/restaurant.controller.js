const RestaurantModel = require('../models/restaurant.model')

async function createRestaurant (req, res) {
  try {
    req.body.totalCapacity = req.body.hourCapacity * 8 // Create restaurant totalCapacity
    const restaurant = await RestaurantModel.create(req.body)
    await restaurant.save()

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error creating restaurant')
  }
}

async function showAllRestaurants (req, res) {
  try {
    const restaurant = await RestaurantModel.find().populate('reservation')

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing all restaurants')
  }
}

async function showOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing one restaurant')
  }
}

async function editOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true, runValidators: true })

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error editing one restaurant')
  }
}

async function deleteOneRestaurant (req, res) {
  try {
    await RestaurantModel.findByIdAndDelete(req.params.restaurantId)

    res.status(200).json('Restaurant has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error deleting one restautant')
  }
}

async function showOneRestaurantMenu (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)

    res.status(200).json(restaurant.menu)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing restaurant menu')
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
