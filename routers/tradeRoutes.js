import express from 'express';
import { sayHello,getLatestQuoteBySymbol,createOrder } from '../controlers/tradeController.js';

const tradeRoutes = express.Router();

tradeRoutes.get('/hello',sayHello);
tradeRoutes.get('/getLatestQuoteBySymbol/:symbol',getLatestQuoteBySymbol);
tradeRoutes.post('/createOrder',createOrder);

export default tradeRoutes;