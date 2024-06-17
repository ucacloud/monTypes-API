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

  static replacePokemonID = (id, pokemon) => {
    console.log('\t Coordinator: replacePokemonID()');
    const replacePokemonID = {
      ...pokemon,
      id,
    };
    return PokemonModel.replacePokemonID(id, replacePokemonID);
  };
}
