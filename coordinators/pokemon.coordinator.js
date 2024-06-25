import PokemonModel from '../models/pokemon.model.js';
import { nanoid } from 'nanoid';
import logger from '../lib/logger.js';

export default class PokemonCoordinator {
  static getPokemon = () => {
    logger.debug('getWidgets', {
      location: 'coordinator',
      function: 'getWidgets',
    });

    return PokemonModel.getPokemon();
  };

  static createPokemon = (newPokemon) => {
    logger.debug({
      location: 'coordinator',
      function: 'createWidget',
    });

    const pokemon = {
      ...newPokemon,
      id: nanoid(5),
    };

    return PokemonModel.createPokemon(pokemon);
  };

  static getPokemonID = (id) => {
    logger.debug({
      location: 'coordinator',
      function: 'getWidget',
      id,
    });

    return PokemonModel.getPokemonID(id);
  };

  static deletePokemonID = (id) => {
    logger.info({
      location: 'coordinator',
      function: 'deleteWidget',
      id,
    });

    return PokemonModel.deletePokemonID(id);
  };

  static replacePokemon = (id, pokemon) => {
    logger.debug({
      location: 'coordinator',
      function: 'replaceWidget',
      id,
    });
    
    const replacePokemon = {
      ...pokemon,
      id,
    };
    return PokemonModel.replacePokemon(id, replacePokemon);
  };

  static updatePokemon = (id, pokemon) => {
    logger.debug({
      location: 'coordinator',
      function: 'updateWidget',
      id,
    });
    return PokemonModel.updatePokemon(id, pokemon);
  };
}
