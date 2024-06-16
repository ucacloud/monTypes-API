// All database interactions are handeled here

const pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass|Poison',
  },
];

export default class PokemonModel {
  static getPokemon = () => {
    console.log('\t\t Model: getPokemon()');
    return pokemon;
  };

  static createPokemon = (newPokemon) => {
    console.log('\t\t Model: getPokemon()');
    pokemon.push(newPokemon);
    return newPokemon;
  };
}
