const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Welcome Bruh')
})

module.exports = router