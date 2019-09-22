const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'))
    res.render('index', {titulo:'firts'})
})

router.get('/contacto', (req, res) => {
    res.render('contacto', {titulo:'Contacto'})
})

router.get('/about', (req, res) => {
    res.render('about', {titulo:'Sobre mi'})
})
module.exports = router