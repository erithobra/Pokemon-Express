const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.pokemon.index);
router.get('/new', ctrl.pokemon.renderNew);
router.get('/:index', ctrl.pokemon.show);
router.get('/:index/edit', ctrl.pokemon.renderEdit);
router.get('/:type/type', ctrl.pokemon.showByType);
router.post('/', ctrl.pokemon.createPokemon);
router.put('/:index', ctrl.pokemon.editPokemon);
router.delete('/:index', ctrl.pokemon.deletePokemon);

module.exports = router;