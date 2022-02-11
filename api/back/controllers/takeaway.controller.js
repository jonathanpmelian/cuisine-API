const ShopModel = require('../models/product.model')

async function showAllTakeaway (req, res) {
  try {
    const products = await ShopModel.find({
      category: 'food'
    })
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing takeaway products: ${err}`)
  }
}

async function showOneTakeaway (req, res) {
  try {
    const products = await ShopModel.findById(req.params.productId)
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one takeaway product: ${err}`)
  }
}

async function createTakeaway (req, res) {
  try {
    const products = await ShopModel.create(req.body)
    await products.save()
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding takeaway product: ${err}`)
  }
}

async function editOneTakeaway (req, res) {
  try {
    const products = await ShopModel.findByIdAndUpdate(req.params.productId, req.body, { new: true })
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error modifing takeaway product: ${err}`)
  }
}

async function deleteOneTakeaway (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)
    res.status(200).json('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting takeaway product: ${err}`)
  }
}

module.exports = { showAllTakeaway, 
  showOneTakeaway, 
  createTakeaway, 
  editOneTakeaway, 
  deleteOneTakeaway
}
