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
    const user = await UserModel.findById(res.locals.user.id)

    if (user) {
      if(user.cart === undefined) {
        var cart = await CartModel.create({})
      } else {
        var cart = await CartModel.findById(user.cart._id)
      }
    
      if (experience !== null) {
        cart.experience.push(req.params.productId)
      } else if (article !== null) {
        cart.article.push(req.params.productId)
      } else if (takeaway !== null) {
        cart.takeaway.push(req.params.productId)
      } else {
        return res.status(200).send('Invalid product')
      }

      await cart.save()
      user.cart = cart.id
      await user.save()

      const showCart = await CartModel.findById(user.cart._id)
      .populate({path: 'article', select: '-stock'}).populate('experience')
      .populate({path: 'takeaway', select: '-cookingTime', populate: {path:'restaurant', select: 'name'}})
      return res.status(200).json(showCart)
    } 
    res.status(200).send('Cannot process your petition')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error adding product to cart')
  }
}

async function viewMyCart (req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    .populate({ path: 'cart', populate: { path: 'article', select: '-stock'} })
    .populate({path: 'cart', populate: {path: 'experience'}})
    .populate({path: 'cart', populate: {path: 'takeaway', select: '-cookingTime', populate: {path:'restaurant', select: 'name'}}})

    res.status(200).json(user.cart)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error showing cart')
  }
}

async function deleteCartProduct (req, res) {
  try {
    const cart = await CartModel.findById(req.params.cartId)
    const experience = await ExperienceModel.findById(req.params.productId)
    const article = await ArticleModel.findById(req.params.productId)
    const takeaway = await TakeawayModel.findById(req.params.productId)

    if (experience !== null) {
      const index = cart.experience.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.experience.splice(index, 1)
      await cart.save()

      return res.status(200).json(cart)
    } else if (article !== null) {
      const index = cart.article.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.article.splice(index, 1)
      await cart.save()

      return res.status(200).json(cart)
    } else if (takeaway !== null) {
      const index = cart.takeaway.findIndex(elem => elem._id.toString() === req.params.productId)
      cart.takeaway.splice(index, 1)
      await cart.save()

      return res.status(200).json(cart)
    } else {
      res.status(200).send('Invalid product')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('Error deleting cart')
  }
}

module.exports = {
  addProductToCart,
  viewMyCart,
  deleteCartProduct
}
