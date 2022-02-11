const router = require('express').Router({mergeParams: true})

const {checkAuth} = require('../utils')

const createAddress = require('../controllers/address.controller')

router.post('/', checkAuth, createAddress)

module.exports = router