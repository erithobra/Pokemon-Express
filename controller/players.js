// const players = require("../models/players"); // <-- removed this
const Player = require('../models').Player // <-- added this

const Team = require("../models").Team;

const Pokemon = require("../models").Pokemon;

// index render complete -- no changes were needed
const index = (req, res) => {
    res.render("players/index.ejs");
};

////// signup functionality //////
// signup render complete -- no changes were needed
const renderSignup = (req, res) => {
    res.render("players/signup.ejs");
};

// signup complete
const signup = (req, res) => {
    // players.push(req.body);
    // res.redirect(`/players/profile/${players.length-1}`);
    // console.log(players);
    Player.create(req.body)
    .then(newPlayer => {
        res.redirect(`/players/profile/${newPlayer.id}`);
    })
};

////// profile view //////
// profile render complete
const profile = (req, res) => {
    // res.render("players/profile.ejs", {
    //     player: players[req.params.index],
    //     index: req.params.index
    // });

    Player.findByPk(req.params.index, {
        include: [
            {
                model: Team
            },
            {
                model: Pokemon
            }
        ],
    })
    .then(playerProfile => {
        Team.findAll()
        .then(allTeams => {
            Pokemon.findAll()
            .then(allPokemon => {
            res.render("players/profile.ejs", {
                player: playerProfile,
                teams: allTeams,
                pokes: allPokemon
            });
            });  
        })


    });
};

////// login functionality //////
// login render complete -- no changes were needed
const renderLogin = (req, res) => {
    res.render("players/login.ejs");
};

////// login view profile //////
// login complete
const login = (req, res) => {
    // let index = players.findIndex(
    //     player => (player.username === req.body.username && player.password === req.body.password)
    // );
    // res.redirect(`/players/profile/${index}`);
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundPlayer => {
        res.redirect(`/players/profile/${foundPlayer.id}`);
    });
};

////// delete player //////
// deletePlayer complete
const deletePlayer = (req,res) => {
    // players.splice(req.params.index, 1);
    // res.redirect("/players");
    // console.log(players);
    Player.destroy({ where: {id: req.params.index} })
    .then(() => {
        res.redirect("/players/")
    });
};

////// edit player //////
// editPlayer complete
const editPlayer = (req, res) => {
    // players[req.params.index] = req.body;
    // res.redirect(`/players/profile/${req.params.index}`);
    console.log(req.body);
    Player.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then((updatePlayer) => {
        
        Pokemon.findByPk(req.body.pokemon).then((foundPokemon) => {
            Player.findByPk(req.params.index).then((foundPlayer) => {
                foundPlayer.addPokemon(foundPokemon);
                res.redirect(`/players/profile/${req.params.index}`)
            })
        })
        
    });
};


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