const express = require('express')
const route = require('./route')
const path = require('path')
const controller = require('./controller/question-controller')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

app.use(route)

app.listen(3000, () => console.log("RODANDO"))