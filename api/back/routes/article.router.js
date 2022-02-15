const router = require('express').Router()

const {
  checkAuth,
  checkAdmin,
  checkIf
} = require('../utils/index')

const {
  createArticle,
  showAllArticles,
  showOneArticle,
  editOneArticle,
  deleteOneArticle
} = require('../controllers/article.controller')

router.post('/', checkAuth, checkAdmin, createArticle)
router.get('/', checkIf, showAllArticles)
router.get('/:articleId', checkIf, showOneArticle)
router.put('/:articleId', checkAuth, checkAdmin, editOneArticle)
router.delete('/:articleId', checkAuth, checkAdmin, deleteOneArticle)

module.exports = router
