const ExperienceModel = require('../models/experience.model')

async function createExperience (req, res) {
  try {
    const experience = await ExperienceModel.create(req.body)
    await experience.save()

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding experience: ${err}`)
  }
}

async function showAllExperiences (req, res) {
  try {
    const experiences = await ExperienceModel.find()

    res.status(200).json(experiences)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing experiences: ${err}`)
  }
}

async function showOneExperience (req, res) {
  try {
    const experience = await ExperienceModel.findById(req.params.productId)

    res.status(200).json(experience)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing experience: ${err}`)
  }
}

async function editOneExperience (req, res) {
  try {
    const product = await ExperienceModel.findByIdAndUpdate(req.params.productId, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating experience: ${err}`)
  }
}

async function deleteOneExperience (req, res) {
  try {
    await ExperienceModel.findByIdAndDelete(req.params.productId)

    res.status(200).send('Experience has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting experience: ${err}`)
  }
}

module.exports = {
  createExperience,
  showAllExperiences,
  showOneExperience,
  editOneExperience,
  deleteOneExperience
}
