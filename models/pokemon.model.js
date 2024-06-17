// All database interactions are handeled here

let pokemon = [
  {
    id: '1',
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

  static getPokemonID = (id) => {
    console.log('\t\t Model: getPokemonID()');
    const pokemons = pokemon.find((p) => (p.id === id));

    return pokemons;
  };

  static deletePokemonID = (id) => {
    console.log('\t\t Model: deletePokemonID()');

    const pokemonCountBeforeDelete = pokemon.length;
    pokemon = pokemon.filter((p) => (p.id !== id));

    if (pokemonCountBeforeDelete === pokemon.length) {
      return false;
    }

    return true;
  };

  static replacePokemonID = (id, pokemons) => {
    const pokemonIndex = pokemon.findIndex((p) => (p.id === id));

    if (pokemonIndex > -1) {
      pokemon.splice(pokemonIndex, 1, pokemon);
      return pokemons;
    }

    return false;
  };
}
