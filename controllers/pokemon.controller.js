import PokemonCoordinator from '../coordinators/pokemon.coordinator.js';

export const getPokemon = async (req, res, next) => {
  console.log('Controller: getPokemon()');

  const result = PokemonCoordinator.getPokemon();

  res.status(200).json(result);
};

export const createPokemon = async (req, res, next) => {
  console.log('Controller: createPokemon()');

  const result = PokemonCoordinator.createPokemon(req.body);

  res.status(201).json(result);
};

export const getPokemonID = async (req, res, next) => {
  console.log(`Controller: getPokemonID(${req.params.id})`);

  const result = PokemonCoordinator.getPokemonID(req.params.id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const deletePokemonID = async (req, res, next) => {
  console.log(`Controller: deletePokemonID(${req.params.id})`);

  const result = PokemonCoordinator.deletePokemonID(req.params.id);

  if (result) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
};

export const replacePokemon = async (req, res, next) => {
  console.log(`Controller: replacePokemon(${req.params.id})`);

  const result = PokemonCoordinator.replacePokemon(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};

export const updatePokemon = async (req, res, next) => {
  console.log(`Controller: updatePokemon(${req.params.id})`);

  const result = PokemonCoordinator.updatePokemon(req.params.id, req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json();
  }
};
