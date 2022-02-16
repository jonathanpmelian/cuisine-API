const UserModel = require('../models/user.model')

async function createAddress (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0 })
    user.address.push(req.body)
    await user.save()

    res.status(200).send(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error creating address: ${err}`)
  }
}

async function showAllAddress (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0 })

    res.status(200).json(user.address)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing all address: ${err}`)
  }
}

async function showOneAddress (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0 })
    const address = user.address.id(req.params.addressId)

    res.status(200).json(address)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one address: ${err}`)
  }
}

async function editOneAddress (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0 })
    const address = user.address.id(req.params.addressId)
    address.set(req.body)
    await user.save()

    res.status(200).json(address)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating address: ${err}`)
  }
}

async function deleteOneAddress (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0 })
    user.address.remove(req.params.addressId)

    res.status(200).send('Address deleted correctly')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting address: ${err}`)
  }
}

module.exports = {
  createAddress,
  showAllAddress,
  showOneAddress,
  editOneAddress,
  deleteOneAddress
}
