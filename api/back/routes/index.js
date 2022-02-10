const router = require('express').Router()
const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')
const restaurantRouter = require('./restaurant.router')
const shopRouter = require('./shop.router')
const experienceRouter = require('./experience.router')

router.use('/restaurant', restaurantRouter)

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/shop', shopRouter)
router.use('/experience', experienceRouter)

module.exports = router
