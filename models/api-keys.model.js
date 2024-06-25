import { db } from '../lib/database.js'
import Constants from '../lib/constants.js';

export default class ApiKeysModel {
  static getApiKey = (key) => {
    logger.debug('Retrieving API Key', {
      key,
    });
    return db.getDb().collection(Constants.AUTH_KEYS_COLLECTION).findOne({ key });
  };
}