const router = require('express').Router()

const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')
const usersRouter = require('./users.router')
const restaurantRouter = require('./restaurant.router')
const articleRouter = require('./article.router')
const takeawayRouter = require('./takeaway.router')
const experienceRouter = require('./experience.router')

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/users', usersRouter)
router.use('/restaurant', restaurantRouter)
router.use('/article', articleRouter)
router.use('/takeaway', takeawayRouter)
router.use('/experience', experienceRouter)

module.exports = router
