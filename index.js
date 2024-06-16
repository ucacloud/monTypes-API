import express from 'express';
import bodyParser from 'body-parser';
const { json } = bodyParser;

import pokemonRouter from './routes/pokemon.routes.js';

// This is my express application
const app = express();
const port = 3000;
app.use(json());

app.use('/api/v1/pokemon', pokemonRouter);

app.listen(port, () => {
  console.log(`Starting express application on port ${port}`);
});
