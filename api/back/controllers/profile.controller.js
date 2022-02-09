const UserModel = require('../models/user.model')

async function getProfile (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

async function editProfile (req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(res.locals.user.id, req.body, {
      new: true
    })
    await user.save()
    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

async function deleteProfile (req, res) {
  try {
    await UserModel.findByIdAndDelete(res.locals.user.id)
    res.status(200).send('User has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error finding user: ${err}`)
  }
}

module.exports = {
  getProfile,
  editProfile,
  deleteProfile
}
