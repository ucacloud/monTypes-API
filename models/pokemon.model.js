// All database interactions are handeled here

import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';
import { ReturnDocument } from 'mongodb';

let pokemon = [
  {
    id: '1',
    name: 'Bulbasaur',
    type: 'Grass|Poison',
  },
];

export default class PokemonModel {
  static getPokemon = async () => {
    console.log('\t\t Model: getPokemon()');
    // return pokemon;

    return db.dbPokemon().find({}, {
      projection: Constants.DEFAULT_PROJECTION })
      .toArray();
  };

  static createPokemon = async (newPokemon) => {
    console.log('\t\t Model: getPokemon()');

    await db.dbPokemon().insertOne(newPokemon);

    const returnPokemon = { ...newPokemon };
    // eslint-disable-next-line no-underscore-dangle
    delete returnPokemon._id;
    return returnPokemon;
  };

  static getPokemonID = (id) => {
    console.log('\t\t Model: getPokemonID()');
    return db
      .dbPokemon()
      .findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static deletePokemonID = (id) => {
    console.log('\t\t Model: deletePokemonID()');

    return db.dbPokemon().deleteOne({ id });
  };

  static replacePokemon = async (id, pokemons) => {
    const result = await db.dbPokemon().replaceOne({ id }, pokemons);

    if (result.matchedCount === 1) {
      return pokemons;
    }

    return false;
  };

  static updatePokemon = async (id, pokemons) => {
    const update = {
      $set: {},
    };

    Object.keys(pokemons).forEach((key) => {
      if (key === 'id') {
        return;
      }
      update.$set[key] = pokemons[key];
    });

    const result = await db
      .dbPokemon()
      .findOneAndUpdate({ id }, update, { ReturnDocument: 'after' });

    if (result) {
      delete result._id;
      return result;
    }

    return false;
  };
}
