const router = require('express').Router()
const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')
const restaurantRouter = require('./restaurant.router')
const shopRouter = require('./shop.router')

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/restaurant', restaurantRouter)


router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/shop', shopRouter)


module.exports = router
