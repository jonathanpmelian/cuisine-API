const TakeawayModel = require('../models/takeaway.model')

async function showAllTakeaway (req, res) {
  try {
    const takeaways = await TakeawayModel.find(req.query, { cookingTime: 0 }).populate({ path: 'restaurant', select: 'name' })

    res.status(200).json(takeaways)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing all takeaways: ${err}`)
  }
}

async function showOneTakeaway (req, res) {
  try {
    const takeaway = await TakeawayModel.findById(req.params.productId, { cookingTime: 0 }).populate({ path: 'restaurant', select: 'name' })

    res.status(200).json(takeaway)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one takeaway: ${err}`)
  }
}

async function createTakeaway (req, res) {
  try {
    const products = await TakeawayModel.create(req.body)
    await products.save()

    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding takeaway: ${err}`)
  }
}

async function editOneTakeaway (req, res) {
  try {
    const products = await TakeawayModel.findByIdAndUpdate(req.params.productId, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error editing takeaway: ${err}`)
  }
}

async function deleteOneTakeaway (req, res) {
  try {
    await TakeawayModel.findByIdAndDelete(req.params.productId)

    res.status(200).json('Takeaway has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting takeaway: ${err}`)
  }
}

module.exports = {
  showAllTakeaway,
  showOneTakeaway,
  createTakeaway,
  editOneTakeaway,
  deleteOneTakeaway
}
