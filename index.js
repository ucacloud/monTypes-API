import express from 'express';
import bodyParser from 'body-parser';
import { db } from './lib/database.js';
import pokemonRouter from './routes/pokemon.routes.js';
import config from 'config';

const { json } = bodyParser;

// This is my express application
const app = express();
const port = 3000;
app.use(json());

app.use(express.static('./static'));

app.use('/api/v1/pokemon', pokemonRouter);

/* export NODE_ENV=myhost */
const mongoConfig = config.get('mongo');
console.log(mongoConfig);
db.init(mongoConfig);

app.listen(port, () => {
  console.log(
    `Starting express application on port ${port} @ ${new Date().toISOString()}`
  );
});
