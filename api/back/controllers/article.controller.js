const ArticleModel = require('../models/article.model')

async function createArticle (req, res) {
  try {
    const article = await ArticleModel.create(req.body)
    await article.save()

    res.status(200).json(article)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error adding article: ${err}`)
  }
}

async function showAllArticles (req, res) {
  try {
    const articles = await ArticleModel.find(req.query).sort({stock: 0}).limit(req.query.limit)

    res.status(200).json(articles)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing articles: ${err}`)
  }
}

async function showOneArticle (req, res) {
  try {
    const article = await ArticleModel.findById(req.params.articleId)

    res.status(200).json(article)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error showing article: ${err}`)
  }
}

async function editOneArticle (req, res) {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.articleId, req.body, {
      new: true,
      runValidators: true
    })
    await article.save()

    res.status(200).json(article)
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error updating article: ${err}`)
  }
}

async function deleteOneArticle (req, res) {
  try {
    await ArticleModel.findByIdAndDelete(req.params.articleId)

    res.status(200).send('Article has been deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send(`Error deleting article: ${err}`)
  }
}

module.exports = {
  createArticle,
  showAllArticles,
  showOneArticle,
  editOneArticle,
  deleteOneArticle
}
