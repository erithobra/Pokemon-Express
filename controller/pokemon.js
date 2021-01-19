const pokemon = require("../models/pokemon.js");

const index = (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon,
    });
};

const newPokemon = (req, res) => {
    res.render("new.ejs");
};

const postPokemon = (req, res) => {
    pokemon.push(req.body);
    console.log(pokemon);
    res.redirect("/pokemon");
};

const edit = (req, res) => {
    res.render("edit.ejs", {
        poke: pokemon[req.params.index],
        index: req.params.index
    });
};

const put = (req, res) => {
    let index = parseInt(req.params.index);
    pokemon[index] = req.body;
    res.redirect("/pokemon/");
};

const deletePokemon = (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect("/pokemon/");
}

const show = (req, res) => {
    res.render("show.ejs", {
        poke: pokemon[req.params.index]
    });
};

module.exports = {
    index,
    newPokemon,
    postPokemon,
    edit,
    put,
    deletePokemon,
    show
}