import PokemonModel from '../models/pokemon.model.js';
import { v4 as uuid } from 'uuid';

export default class PokemonCoordinator {
  static getPokemon = () => {
    console.log('\t Coordinator: getPokemon()');

    return PokemonModel.getPokemon();
  };

  static createPokemon = (newPokemon) => {
    console.log('\t Coordinator: createPokemon()');

    const pokemon = {
      ...newPokemon,
      id: uuid(),
    };

    return PokemonModel.createPokemon(pokemon);
  };

  static getPokemonID = (id) => {
    console.log('\t Coordinator: getPokemonID()');

    return PokemonModel.getPokemonID(id);
  };

  static deletePokemonID = (id) => {
    console.log('\t Coordinator: deletePokemonID()');

    return PokemonModel.deletePokemonID(id);
  };

  static replacePokemon = (id, pokemon) => {
    console.log('\t Coordinator: replacePokemon()');
    const replacePokemon = {
      ...pokemon,
      id,
    };
    return PokemonModel.replacePokemon(id, replacePokemon);
  };

  static updatePokemon = (id, pokemon) => {
    console.log('\t Coordinator: updatePokemon()');
    return PokemonModel.updatePokemon(id, pokemon);
  };
}
