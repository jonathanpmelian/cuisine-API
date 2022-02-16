const UserModel = require('../models/user.model')
const ArticleModel = require('../models/article.model')
const ExperienceModel = require('../models/experience.model')
const TakeawayModel = require('../models/takeaway.model')
const CartModel = require('../models/cart.model')

async function addProductToCart (req, res) {
  try {
    const experience = await ExperienceModel.findById(req.params.productId)
    const article = await ArticleModel.findById(req.params.productId)
    const takeaway = await TakeawayModel.findById(req.params.productId)

    if (res.locals.user) {
      var user = await UserModel.findById(res.locals.user.id)

      if (user.cart === undefined) {
        var cart = await CartModel.create({})
        cart.totalPrice = 0
      } else {
        var cart = await CartModel.findById(user.cart._id)
      }
    } else {
      if (req.body.hasOwnProperty('cart')) {
        var cart = await CartModel.findById(req.body.cart)
      } else {
        var cart = await CartModel.create({})
        cart.totalPrice = 0
      }
    }

    if (experience !== null) {
      cart.experience.push(req.params.productId)
      cart.totalPrice += experience.price
    } else if (article !== null) {
      if (article.stock > 0) {
        cart.article.push(req.params.productId)
        cart.totalPrice += article.price
      } else {
        return res.status(200).send('Article not available')
      }
    } else if (takeaway !== null) {
      cart.takeaway.push(req.params.productId)
      cart.totalPrice += takeaway.price
    } else {
      return res.status(200).send('Invalid product')
    }

    await cart.save()

    if (user) {
      user.cart = cart.id
      await user.save()
    }

    const showCart = await CartModel.findById(cart.id)
      .populate({ path: 'article', select: '-stock' }).populate('experience')
      .populate({ path: 'takeaway', select: '-cookingTime', populate: { path: 'restaurant', select: 'name' } })
    return res.status(200).json(showCart)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding product to cart: ${err}`)
  }
}

async function viewMyCart (req, res) {
  try {
    if (res.locals.user) {
      const user = await UserModel.findById(res.locals.user.id)
        .populate({ path: 'cart', populate: { path: 'article', select: '-stock' } })
        .populate({ path: 'cart', populate: { path: 'experience' } })
        .populate({ path: 'cart', populate: { path: 'takeaway', select: '-cookingTime', populate: { path: 'restaurant', select: 'name' } } })

      return res.status(200).json(user.cart)
    } else {
      const cart = await CartModel.findById(req.body.cart)
        .populate({ path: 'article', select: '-stock' })
        .populate({ path: 'experience' })
        .populate({ path: 'takeaway', select: '-cookingTime', populate: { path: 'restaurant', select: 'name' } })

      return res.status(200).json(cart)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing cart: ${err}`)
  }
}

async function deleteCartProduct (req, res) {
  try {
    const cart = await CartModel.findById(req.params.cartId)
      .populate({ path: 'article', select: '-stock' })
      .populate({ path: 'experience' })
      .populate({ path: 'takeaway', select: '-cookingTime', populate: { path: 'restaurant', select: 'name' } })
    const experience = await ExperienceModel.findById(req.params.productId)
    const article = await ArticleModel.findById(req.params.productId)
    const takeaway = await TakeawayModel.findById(req.params.productId)

    if (experience !== null) {
      const index = cart.experience.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.experience.splice(index, 1)
      cart.totalPrice -= experience.price
    } else if (article !== null) {
      const index = cart.article.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.article.splice(index, 1)
      cart.totalPrice -= article.price
    } else if (takeaway !== null) {
      const index = cart.takeaway.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.takeaway.splice(index, 1)
      cart.totalPrice -= takeaway.price
    } else {
      return res.status(200).send('Invalid product')
    }

    await cart.save()

    if (cart.experience[0] === undefined && cart.article[0] === undefined && cart.takeaway[0] === undefined) {
      await CartModel.findByIdAndDelete(cart.id)

      if (res.locals.user) {
        const user = await UserModel.findById(res.locals.user.id)
        user.cart = undefined
        await user.save()
      }
      return res.status(200).send('Your cart is empty now')
    }
    res.status(200).json(cart)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting cart product: ${err}`)
  }
}

module.exports = {
  addProductToCart,
  viewMyCart,
  deleteCartProduct
}
