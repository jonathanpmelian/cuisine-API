const ShopModel = require('../models/product.model')

async function createExperience (req, res) {
  try {
    const experience = await ShopModel.create(req.body)
    await experience.save()

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding experience: ${err}`)
  }
}

async function showAllExperiences (req, res) {
  try {
    const experiences = await ShopModel.find({
      category: 'experience'
    })

    res.status(200).json(experiences)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing products: ${err}`)
  }
}

async function showOneExperience (req, res) {
  try {
    const experience = await ShopModel.findById(req.params.productId)

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing product: ${err}`)
  }
}

async function editOneExperience (req, res) {
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

async function deleteOneExperience (req, res) {
  try {
    await ShopModel.findByIdAndDelete(req.params.productId)

    res.status(200).send('Product has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting product: ${err}`)
  }
}

module.exports = {
  createExperience,
  showAllExperiences,
  showOneExperience,
  editOneExperience,
  deleteOneExperience
}
