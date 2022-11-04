import express from 'express';
import { sayHello,getLatestQuoteBySymbol } from '../controlers/tradeController.js';

const tradeRoutes = express.Router();

tradeRoutes.get('/hello',sayHello);
tradeRoutes.get('/getLatestQuoteBySymbol/:symbol',getLatestQuoteBySymbol)

export default tradeRoutes;