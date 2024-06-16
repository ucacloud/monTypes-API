import PokemonModel from '../models/pokemon.model.js';

export default class PokemonCoordinator {
  static getPokemon = () => {
    console.log('\t Coordinator: getPokemon()');

    return PokemonModel.getPokemon();
  }

  static createPokemon = (newPokemon) => {
    console.log('\t Coordinator: createPokemon()');

    // TODO: Generate unique id for new widget

    return PokemonModel.createPokemon(newPokemon);
  }
}