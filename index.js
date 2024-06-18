import express from 'express';
import bodyParser from 'body-parser';
import { db } from './lib/database.js';
import pokemonRouter from './routes/pokemon.routes.js';

const { json } = bodyParser;

// This is my express application
const app = express();
const port = 3000;
app.use(json());

app.use('/api/v1/pokemon', pokemonRouter);

const config = {
  url: 'mongodb://127.0.0.1:27017',
  database: 'montypes',
  minPoolSize: 3,
  maxPoolSize: 10,
};

db.init(config);

app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});
