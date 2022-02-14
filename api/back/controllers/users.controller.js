const UserModel = require('../models/user.model')

async function showAllUsers (req, res) {
  try {
    const user = await UserModel.find()

    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing users: ${err}`)
  }
}

async function editOneUserRole (req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.userId, { role: req.body.role }, {
      new: true,
      runValidators: true
    })
    await user.save()

    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error editing role user: ${err}`)
  }
}

async function deleteOneUserProfile (req, res) {
  try {
    await UserModel.findByIdAndRemove(req.params.userId)

    res.status(200).send('User has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting user: ${err}`)
  }
}

module.exports = {
  showAllUsers,
  editOneUserRole,
  deleteOneUserProfile
}
