const express = require("express");
const router = express.Router();
const ctrl = require("../controller");

router.get("/", ctrl.pokemon.index);
router.get("/new", ctrl.pokemon.newPokemon);
router.post("/", ctrl.pokemon.postPokemon);
router.get("/:index/edit", ctrl.pokemon.edit);
router.put("/:index", ctrl.pokemon.put);
router.delete("/:index", ctrl.pokemon.deletePokemon);
router.get("/:index", ctrl.pokemon.show);

module.exports = router;