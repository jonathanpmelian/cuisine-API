const ShopModel = require('../models/product.model')

async function getTakeAway (req, res) {
  try {
    const products = await ShopModel.find()
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing takeaway products: ${err}`)
  }
}

async function getOneTakeAway (req, res) {
  try {
    const products = await ShopModel.findById(req.params.productId)
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one takeaway product: ${err}`)
  }
}

async function addTakeAway (req, res) {
  try {
    const products = await ShopModel.create(req.body)
    await products.save()
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding takeaway product: ${err}`)
  }
}

async function editTakeAway (req, res) {
  try {
    const products = await ShopModel.findByIdAndUpdate(req.params.productId, req.body, { new: true })
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error modifing takeaway product: ${err}`)
  }
}

async function deleteTakeAway (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)
    res.status(200).json('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting takeaway product: ${err}`)
  }
}

module.exports = { getTakeAway, addTakeAway, editTakeAway, deleteTakeAway, getOneTakeAway }
