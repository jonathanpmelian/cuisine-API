const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/index')

const {
  createArticle,
  showAllArticles,
  showOneArticle,
  editOneArticle,
  deleteOneArticle
} = require('../controllers/shop.controller')

router.post('/', checkAuth, checkAdmin, createArticle)
router.get('/', showAllArticles)
router.get('/:productId', showOneArticle)
router.put('/:productId', checkAuth, checkAdmin, editOneArticle)
router.delete('/:productId', checkAuth, checkAdmin, deleteOneArticle)

module.exports = router
