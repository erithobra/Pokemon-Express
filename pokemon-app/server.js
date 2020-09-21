const express = require('express');
const methodOverride = require('method-override');

const app = express();

const pokemon = require('./models/pokemon')

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})

app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        character: pokemon[req.params.index]
    })
})

app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        character: pokemon[req.params.index],
        index: req.params.index
    })
})

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
})

app.put('/pokemon/:index', (req, res) => {
    pokemon[req.params.index] = req.body;
    res.redirect(`/pokemon/${req.params.index}`);
})

app.delete('/pokemon/:index', (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
})

app.listen(3000, () => {
    console.log('I am listening on port 3000')
})