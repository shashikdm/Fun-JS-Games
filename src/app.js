const path = require('path')
const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

//define path for static public assets
const publicPath = path.join(__dirname, '/../public')

//define path for express config
const viewsPath = path.join(__dirname, '/../templates/views')
const partialsPath = path.join(__dirname, '/../templates/partials')
const app = express()

const port = process.env.PORT || 3000

//configure handlebar engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

const contributors = fs.readFileSync('contributors.JSON').toString()
const gamelist = fs.readdirSync('public/games')

app.get('', (req, res) => {
    res.render('index', {
        pagetitle: 'Fun JS Games | Home',
        title: 'Fun JS Games',
        gamelist,
        contributors
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        pagetitle: 'Fun JS Games | About',
        title: 'About',
        contributors
    })
})

app.get('/contribute', (req, res) => {
    res.render('contribute', {
        pagetitle: 'Fun JS Games | Contribute',
        title: 'Contribute',
        contributors
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        pagetitle: 'Fun JS Games | Error',
        title: 'Error',
        errMsg: '404 page not found',
        contributors
    })
})

app.listen(port, () => {
    console.log('Server is on on port ' + port)
})