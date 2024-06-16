import express from 'express';
import { getPokemon } from '../controllers/pokemon.controller.js';

const pokemonRouter = express.Router();

// GET /api/v1/pokemon
pokemonRouter.get('/', getPokemon);

export default pokemonRouter;