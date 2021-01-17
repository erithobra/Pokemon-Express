const express = require("express");
const app = express ();
//const methodOverride = require("method-override");
const pokemon = require("./models/pokemon.js");

//index route - Commit 4
app.get("/pokemon/", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon,

    });
});

//show route - Commit 5
app.get("/pokemon/:index", (req,res) => {
    res.render("show.ejs", {
        poke: pokemon[req.params.index]
    });
});

// app.get("/pokemon/", (req,res) => {
//     res.send(pokemon);
// })




app.listen(3000, () => {
    console.log("I am listening");
});