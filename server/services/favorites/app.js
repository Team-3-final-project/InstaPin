require('dotenv').config();
const express = require('express')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler.js')
const favoriteRoutes = require('./routes')

const app = express()
const PORT = 3003

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(favoriteRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('listening on port ', PORT);
})

module.exports = app