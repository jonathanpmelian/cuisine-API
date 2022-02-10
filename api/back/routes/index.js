const router = require('express').Router()

const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')
const restaurantRouter = require('./restaurant.router')

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/restaurant', restaurantRouter)

module.exports = router
