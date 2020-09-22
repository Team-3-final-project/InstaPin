const router = require('express').Router()
const favoriteController = require('../controller/favoriteController.js')
const auth = require('../middlewares/authentication.js')

router.use(auth)
router.get('/favorites', favoriteController.getFavorites)
router.get('/favorites/:id/:type', favoriteController.getFavorite)
router.post('/favorites/:type', favoriteController.addFavorite)
router.get('/favorites/:type', favoriteController.getInstagramByType)
router.delete('/favorites/:id/:type', favoriteController.deleteFavorite)

module.exports = router