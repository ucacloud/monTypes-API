// All database interactions are handeled here

import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';
import { ReturnDocument } from 'mongodb';
import logger from '../lib/logger.js';

export default class PokemonModel {
  static getPokemon = async () => {
    logger.debug('getWidgets', {
      location: 'model',
      function: 'getWidgets',
    });
    // return pokemon;

    return db.dbPokemon().find({}, {
      projection: Constants.DEFAULT_PROJECTION })
      .toArray();
  };

  static createPokemon = async (newPokemon) => {
    logger.debug({
      location: 'model',
      function: 'createWidget',
    });

    await db.dbPokemon().insertOne(newPokemon);

    const returnPokemon = { ...newPokemon };
    // eslint-disable-next-line no-underscore-dangle
    delete returnPokemon._id;
    return returnPokemon;
  };

  static getPokemonID = (id) => {
    logger.debug({
      location: 'model',
      function: 'getWidget',
      id,
    });
    return db
      .dbPokemon()
      .findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static deletePokemonID = (id) => {
    logger.debug({
      location: 'model',
      function: 'deleteWidget',
      id,
    });

    return db.dbPokemon().deleteOne({ id });
  };

  static replacePokemon = async (id, pokemons) => {
    logger.debug({
      location: 'model',
      function: 'replaceWidget',
      id,
    });
    const result = await db.dbPokemon().replaceOne({ id }, pokemons);

    if (result.matchedCount === 1) {
      return pokemons;
    }

    return false;
  };

  static updatePokemon = async (id, pokemons) => {
    logger.debug({
      location: 'model',
      function: 'updateWidget',
      id,
    });
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
