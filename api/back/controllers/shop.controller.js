const ShopModel = require('../models/article.model')

async function createArticle (req, res) {
  try {
    const product = await ShopModel.create(req.body)
    await product.save()

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding product: ${err}`)
  }
}

async function showAllArticles (req, res) {
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

async function showOneArticle (req, res) {
  try {
    const product = await ShopModel.findById(req.params.productId)

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing product: ${err}`)
  }
}

async function editOneArticle (req, res) {
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

async function deleteOneArticle (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)

    res.status(200).send('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting product: ${err}`)
  }
}

module.exports = {
  createArticle,
  showAllArticles,
  showOneArticle,
  editOneArticle,
  deleteOneArticle
}
