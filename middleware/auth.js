import ApiKeysCoordinator from '../coordinators/api-key.coordinator.js';
import { db } from '../lib/database.js';


const middleware = () => async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send();

    return;
  }

  const authValue = Buffer.from(req.headers.authorization, 'base64').toString('utf-8');
  const values = authValue.split(':');
  const apiKey = values[0];
  const apiSecret = values[1];

  const dbKey = await ApiKeysCoordinator.getApiKey(apiKey);

  if (!dbKey) {
    logger.warn('API Key and/or secret not found!', {
      apiKey
    });
    res.status(401).send();
    return;
  }

  if (apiKey !== validApiKey || apiSecret !== validPaiSecret) {
    res.status(401).send();

    return;
  }

  console.log(values);

  next();
};

export default middleware;