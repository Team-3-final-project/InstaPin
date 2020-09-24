const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
    res.send('Welcome Bruh')
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/checkUser', UserController.checkUser)

module.exports = router