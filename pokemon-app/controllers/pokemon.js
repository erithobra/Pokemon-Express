const pokemon = require('../models/pokemon');

const index = (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
}

const show = (req, res) => {
    res.render('show.ejs', {
        character: pokemon[req.params.index],
        index: req.params.index
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const createPokemon = (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
}

const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        character: pokemon[req.params.index],
        index: req.params.index
    })
}

const editPokemon = (req, res) => {
    pokemon[req.params.index] = req.body;
    res.redirect(`/pokemon/${req.params.index}`);
}

const deletePokemon = (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
}

const showByType = (req, res) => {
    if(req.query.type === 'all'){
        res.render('index.ejs', {
            pokemon: pokemon
        })
    } else {
        let pokemonByType = pokemon.filter(character => {
            return character.type === req.query.type
        })
    
        res.render('index.ejs', {
            pokemon: pokemonByType
        })
    } 
}

module.exports = {
    index,
    show,
    renderEdit,
    renderNew,
    editPokemon,
    createPokemon,
    deletePokemon,
    showByType
}