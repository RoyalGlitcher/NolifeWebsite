const express = require('express');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Nolife',
        name: 'Alice'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        aboutText: 'yes',
        name: 'Alice'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Contact me: zo#8389',
        title: 'Help',
        name: 'Alice'
    })
})

app.get('/bagel', (req, res) => {
    res.render('bagel', {
        title: 'Bagel',
        name: 'Alice',
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorText: 'Help article not found',
        title: 'Error 404',
        name: 'Alice'
    })
})

app.get('/bagel-json', (req, res) => {
    const importBagel = () => {
        try{
            const dataBuffer = fs.readFileSync('../DiscordBot/bagel-bot/bagel.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (err) {
            return []
        }
    }
    
    let bagel = importBagel()
    
    res.send({
        bagel: bagel
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorText: 'Page not found',
        title: 'Error 404',
        name: 'Alice'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})