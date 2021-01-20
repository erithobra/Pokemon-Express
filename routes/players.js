////// BOILER PLATE //////
const express = require("express");
const router = express.Router();
const ctrl = require("../controller");
////// BOILER PLATE //////

router.get("/", ctrl.players.index);
router.get("/signup", ctrl.players.renderSignup);
router.get("/login", ctrl.players.renderLogin);
router.post("/signup", ctrl.players.signup);
router.get("/profile/:index", ctrl.players.profile);
router.post("/login/", ctrl.players.login);
router.delete("/:index", ctrl.players.deletePlayer);



module.exports = router;