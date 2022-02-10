
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

async function getAllRestaurants (req, res) {
  try {
    const restaurant = await RestaurantModel.find()
    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing all restautants')
  }
}

async function getOneRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findById(req.params.restaurantId)
    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing one restautant')
  }
}

async function editRestaurant (req, res) {
  try {
    const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true })
    res.status(200).json(restaurant)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error modifing one restautant')
  }
}

async function deleteRestaurant (req, res) {
  try {
    await RestaurantModel.findByIdAndDelete(req.params.restaurantId)
    res.status(200).json('Restaurant has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error deliting one restautant')
  }
}

module.exports = { createRestaurant, getAllRestaurants, getOneRestaurant, editRestaurant, deleteRestaurant }
