const RestaurantModel = require('../models/restaurant.model')

async function createRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.create(req.body)
    await restaurant.save()
    
    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error creating restautant')
  }
}

async function showAllRestaurants (req, res) {
  try {
    const restaurant = await RestaurantModel.find()

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing all restautants')
  }
}

async function showOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing one restautant')
  }
}

async function editOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true })

    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error modifing one restautant')
  }
}

async function deleteOneRestaurant (req, res) {
  try {
    await RestaurantModel.findByIdAndDelete(req.params.restaurantId)

    res.status(200).json('Restaurant has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error deliting one restautant')
  }
}

async function showMenu (req, res) {
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
  showMenu
}
