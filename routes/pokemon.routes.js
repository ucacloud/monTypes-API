import express from 'express';
import {
  getPokemon,
  createPokemon,
  getPokemonID,
  replacePokemonID,
  deletePokemonID,
  updatePokemonID,
} from '../controllers/pokemon.controller.js';

const pokemonRouter = express.Router();

// GET /api/v1/pokemon
pokemonRouter.get('/', getPokemon);

// POST /api/v1/pokemon
pokemonRouter.post('/', createPokemon);

// GET /api/v1/pokemon/<id>
pokemonRouter.get('/:id', getPokemonID);

// PUT /api/v1/pokemon/<id>
pokemonRouter.put('/:id', replacePokemonID);

// DELETE /api/v1/pokemon/<id>
pokemonRouter.delete('/:id', deletePokemonID);

// PATCH /api/v1/pokemon/<id>
pokemonRouter.patch('/:id', updatePokemonID);

export default pokemonRouter;
