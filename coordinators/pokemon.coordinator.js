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
}
