import ApiKeysModel from '../models/api-keys.model.js';

export default class ApiKeysCoordinator {
  static getApiKey = (key) => {
    return ApiKeysModel.getApiKey(key);
  };
}