const OrderModel = require('../models/order.model')
const UserModel = require('../models/user.model')
const CartModel = require('../models/cart.model')

async function createOrder (req, res) {
  try {
    if(res.locals.user) {
      var user = await UserModel.findById(res.locals.user.id)
      if (user.cart === undefined) {
       return res.status(200).send('Your cart is empty')
      }
      req.body.cart = user.cart
      req.body.email = user.email
    }
    
    const order = await OrderModel.create(req.body)
    
    if(res.locals.user) {
      user.order.push(order.id)
     await user.save()
    }
    
    await CartModel.findByIdAndRemove(req.body.cart)

    if(res.locals.user) {
      user.cart = undefined
      await user.save()
    }
    
    res.status(200).json(order)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error creating order: ${err}`)
  }
}

async function showAllOrders (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id).populate('order')
    if (user.role === 'Admin') {
      const order = await OrderModel.find(req.query).sort({ status: 0 })

      return res.status(200).json(order)
    } else {
      return res.status(200).json(user.order)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing orders: ${err}`)
  }
}

async function showOneOrder (req, res) {
  try {
    const order = await OrderModel.findById(req.params.orderId)

    res.status(200).json(order)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing one order: ${err}`)
  }
}

async function editOneOrder (req, res) {
  try {
    const order = await OrderModel.findByIdAndUpdate(req.params.orderId, { status: req.body.status, deliveryDay: req.body.deliveryDay, deliveryHour: req.body.deliveryHour }, {
      new: true,
      runValidators: true
    })
    await order.save()

    res.status(200).json(order)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating order: ${err}`)
  }
}

async function deleteOneOrder (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id).populate('order')
    const order = await OrderModel.findById(req.params.orderId)
    const index = user.order.findIndex(elem => elem._id.toString() === req.params.orderId)
    const oneHourDelay = 60 * 60 * 1000

    if (Date.now() - oneHourDelay < order.dateNow) {
      await OrderModel.findByIdAndRemove(req.params.orderId)
      user.order.splice(index, 1)
      await user.save()

      res.status(200).json(user.order)
    } else {
      res.status(200).send('Time to cancell excedded')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting order: ${err}`)
  }
}

module.exports = {
  createOrder,
  showAllOrders,
  showOneOrder,
  editOneOrder,
  deleteOneOrder
}
