const router = require('express').Router()

const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')

router.use('/auth', authRouter)
router.use('/profile', profileRouter)

module.exports = router
