export const getPokemon = async (req, res, next) => {
    console.log('Controller: getPokemon()');
    res.status(200).json([])
};

export const createPokemon = async (req, res, next) => {
    console.log('Controller: createPokemon()');
    res.status(200).json({})
};

export const getPokemonID = async (req, res, next) => {
    console.log(`Controller: getPokemonID(${req.params.id})`);
    res.status(200).json([])
};

export const replacePokemonID = async (req, res, next) => {
    console.log(`Controller: replacePokemonID(${req.params.id})`);
    res.status(200).json([])
};

export const deletePokemonID = async (req, res, next) => {
    console.log(`Controller: deletePokemonID(${req.params.id})`);
    res.status(200).json([])
};

export const updatePokemonID = async (req, res, next) => {
    console.log(`Controller: updatePokemonID(${req.params.id})`);
    res.status(200).json([])
};