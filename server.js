const express = require("express");
const app = express ();
const methodOverride = require("method-override");
const pokemon = require("./models/pokemon.js");

//middleware
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));


//index route - Commit 4
app.get("/pokemon/", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon,

    });
});

//create route - Commit 7

//new show for new.ejs
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs");
});

//create route (POST)
app.post("/pokemon/", (req,res) => {
    pokemon.push(req.body);
    console.log(pokemon);
    res.redirect("/pokemon/");
});

//edit route
app.get("/pokemon/:index/edit", (req, res) => {
    res.render("edit.ejs", {
        poke: pokemon[req.params.index],
        index: req.params.index
    })
})

//put route
app.put("/pokemon/:index", (req, res) => {
let index = parseInt(req.params.index);
pokemon[index] = req.body
res.redirect("/pokemon/");
});

//delete route
app.delete("/pokemon/:index", (req,res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect("/pokemon/");
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