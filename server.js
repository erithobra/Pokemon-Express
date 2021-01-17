const express = require("express");

const app = express();




app.get("/pokemon/", (req,res) => {
    res.send(pokemon);
})

app.get("/pokemon/:index", (req,res) => {
    res.send(pokemon[req.params.index]);
});


app.listen(3000, () => {
    console.log("I am listening");
});