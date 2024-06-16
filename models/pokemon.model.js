// All database interactions are handeled here

const pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass|Poison'
  }
];

export default class PokemonModel {
  static getPokemon = () => {
      return pokemon;
  }

  static createPokemon = (newPokemon) => {
    pokemon.push(newPokemon)
    return newPokemon;
  }
}