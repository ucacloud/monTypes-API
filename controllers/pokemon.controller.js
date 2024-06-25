import PokemonCoordinator from '../coordinators/pokemon.coordinator.js';
import logger from '../lib/logger.js'

export const getPokemon = async (req, res, next) => {
  logger.info('Calling controller.getWidgets', {
    location: 'controller',
    function: 'getWidgets',
    method: 'GET',
  });

  try {
    const result = await PokemonCoordinator.getPokemon();
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const createPokemon = async (req, res, next) => {
  logger.info({
    location: 'controller',
    function: 'createWidget',
    method: 'POST',
  });

  try {
    const result = await PokemonCoordinator.createPokemon(req.body);
    res.status(201).json(result);
  } catch (ex) {
    next(ex);
  }
};

export const getPokemonID = async (req, res, next) => {
  logger.info({
    location: 'controller',
    function: 'getWidget',
    method: 'GET',
    id: req.params.id,
  });

  try {
    const result = await PokemonCoordinator.getPokemonID(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const deletePokemonID = async (req, res, next) => {
  logger.info({
    location: 'controller',
    function: 'deleteWidget',
    method: 'DELETE',
    id: req.params.id,
  });

  try {
    await PokemonCoordinator.deletePokemonID(req.params.id);
    res.status(204).json();
  } catch (ex) {
    next(ex);
  }
};

export const replacePokemon = async (req, res, next) => {
  logger.info({
    location: 'controller',
    function: 'replaceWidget',
    method: 'PUT',
    id: req.params.id,
  });

  try {
    const result = await PokemonCoordinator.replacePokemon(req.params.id, req.body);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (ex) {
    next(ex);
  }
};

export const updatePokemon = async (req, res, next) => {
  logger.info({
    location: 'controller',
    function: 'updateWidget',
    method: 'PATCH',
    id: req.params.id,
  });

  const result = await PokemonCoordinator.updatePokemon(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};
