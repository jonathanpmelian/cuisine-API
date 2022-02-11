const router = require('express').Router({mergeParams: true})

const {checkAuth} = require('../utils')

const {
  createAddress,
  showAllAddress,
  showOneAddress,
  editOneAddress,
  deleteOneAddress
} = require('../controllers/address.controller')

router.post('/', checkAuth, createAddress)
router.get('/', checkAuth, showAllAddress)
router.get('/:addressId', checkAuth, showOneAddress)
router.put('/:addressId', checkAuth, editOneAddress)
router.delete('/:addressId', checkAuth, deleteOneAddress)

module.exports = router