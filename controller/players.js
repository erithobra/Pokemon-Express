const players = require("../models/players");

const index = (req, res) => {
    res.render("players/index.ejs");
};

////// signup functionality //////
const renderSignup = (req, res) => {
    res.render("players/signup.ejs");
};

const signup = (req, res) => {
    players.push(req.body);
    res.redirect(`/players/profile/${players.length-1}`);
    console.log(players);
};

////// profile view //////
const profile = (req, res) => {
    res.render("players/profile.ejs", {
        player: players[req.params.index],
        index: req.params.index
    });
};

////// login functionality //////
const renderLogin = (req, res) => {
    res.render("players/login.ejs");
};

////// login view profile //////
const login = (req, res) => {
    let index = players.findIndex(
        player => (player.username === req.body.username && player.password === req.body.password)
    );
    res.redirect(`/players/profile/${index}`);
}

////// delete player //////
const deletePlayer = (req,res) => {
    players.splice(req.params.index, 1);
    res.redirect("/players");
    console.log(players);
}

////// edit player //////
const editPlayer = (req, res) => {
    players[req.params.index] = req.body;
    res.redirect(`/players/profile/${req.params.index}`);
}


module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    profile,
    login,
    deletePlayer,
    editPlayer,
};