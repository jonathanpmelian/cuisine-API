const ShopModel = require('../models/product.model')

async function addExperience (req, res) {
  try {
    const experience = await ShopModel.create(req.body)
    await experience.save()

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding experience: ${err}`)
  }
}

async function viewAllExperiences (req, res) {
  try {
    const experiences = await ShopModel.find()

    res.status(200).json(experiences)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing products: ${err}`)
  }
}

async function viewOneExperience (req, res) {
  try {
    const experience = await ShopModel.findById(req.params.productId)

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing product: ${err}`)
  }
}

async function updateOneExperience (req, res) {
  try {
    const product = await ShopModel.findByIdAndUpdate(req.params.productId, req.body, {
      new: true
    })

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating product: ${err}`)
  }
}

async function deleteExperience (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)

    res.status(200).send('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting product: ${err}`)
  }
}

module.exports = {
  addExperience,
  viewAllExperiences,
  viewOneExperience,
  updateOneExperience,
  deleteExperience
}
