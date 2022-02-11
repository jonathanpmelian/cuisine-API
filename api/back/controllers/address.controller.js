const UserModel = require('../models/user.model')

async function createAddress(req, res) {
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

module.exports = createAddress