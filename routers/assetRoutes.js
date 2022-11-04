import express from 'express';
import { getActiveAssets,getAssetBySymbol } from '../controlers/assetsController.js';

const assetRouters = express.Router();

assetRouters.get("/getActiveAssets",getActiveAssets);
assetRouters.get("/getActiveAssetBySymbol/:symbol",getAssetBySymbol);

export default assetRouters;