const UserModel = require('../models/user.model')

async function viewMyProfile (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, { password: 0, role: 0, address: 0, order: 0, reservation: 0, __v: 0, cart: 0 })

    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

async function editMyProfile (req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(res.locals.user.id, req.body, {
      new: true,
      runValidators: true
    })
    await user.save()

    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

async function deleteMyProfile (req, res) {
  try {
    await UserModel.findByIdAndDelete(res.locals.user.id)

    res.status(200).send('User has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

async function viewMyReservationList (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id).populate({ path: 'reservation', populate: { path: 'restaurant', select: 'name' } })

    res.status(200).json(user.reservation)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user reservation: ${err}`)
  }
}

module.exports = {
  viewMyProfile,
  editMyProfile,
  deleteMyProfile,
  viewMyReservationList
}
