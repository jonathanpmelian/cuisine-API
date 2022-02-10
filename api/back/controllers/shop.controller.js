const ShopModel = require('../models/product.model')

async function addProduct (req, res) {
  try {
    const product = await ShopModel.create(req.body)
    await product.save()

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding product: ${err}`)
  }
}

async function viewAllProducts (req, res) {
  try {
    const products = await ShopModel.find({
      category: 'article'
    })

    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing products: ${err}`)
  }
}

async function viewOneProduct (req, res) {
  try {
    const product = await ShopModel.findById(req.params.productId)

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing product: ${err}`)
  }
}

async function updateOneProduct (req, res) {
  try {
    const product = await ShopModel.findByIdAndUpdate(req.params.productId, req.body, {
      new: true
    })
    await product.save()

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating product: ${err}`)
  }
}

async function deleteProduct (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)

    res.status(200).send('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting product: ${err}`)
  }
}

module.exports = {
  addProduct,
  viewAllProducts,
  viewOneProduct,
  updateOneProduct,
  deleteProduct
}
