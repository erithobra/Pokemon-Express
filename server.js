const express = require("express");
const app = express ();
//const methodOverride = require("method-override");
const pokemon = require("./models/pokemon.js");




//index route
app.get("/pokemon/", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon,

    });
});

// app.get("/pokemon/", (req,res) => {
//     res.send(pokemon);
// })

// app.get("/pokemon/:index", (req,res) => {
//     res.send(pokemon[req.params.index]);
// });


app.listen(3000, () => {
    console.log("I am listening");
});