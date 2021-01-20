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

////// login functionality //////
const renderLogin = (req, res) => {
    res.render("players/login.ejs");
};

////// profile view //////
const profile = (req, res) => {
    res.render("players/profile.ejs", {
        player: players[req.params.index],
        index: req.params.index
    });
};

////// login view //////
const loginRender = (req, res) => {
    res.render("players/login.ejs");
}

const login = (req, res) => {
    let index = players.findIndex(
        player => (player.username === req.body.username && player.password === req.body.password)
    );
    res.redirect(`/players/profile/${index}`);
}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    profile,
    loginRender,
    login,
};