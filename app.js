const express = require('express')

const indexRouter = require('./src/routes/index')
const cardsRouter = require('./src/routes/cards')
const apiDocRouter = require('./src/routes/apiDoc')

const app = express()

app.use(express.json()) // [CR] tohle je na něco potřeba?
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)
app.use('/cards', cardsRouter) // [CR] neměl by tu být auth?
app.use('/docs', apiDocRouter)

module.exports = app