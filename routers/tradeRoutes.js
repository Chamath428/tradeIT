import express from 'express';
import { sayHello,getLatestQuoteBySymbol,createOrder,getAllOrders,getOrderById,getLatestTrade } from '../controlers/tradeController.js';

const tradeRoutes = express.Router();

tradeRoutes.get('/hello',sayHello);
tradeRoutes.get('/getLatestQuoteBySymbol/:symbol',getLatestQuoteBySymbol);
tradeRoutes.post('/createOrder',createOrder);
tradeRoutes.get('/getAllOrders',getAllOrders);
tradeRoutes.get('/getOrderById/:id',getOrderById);
tradeRoutes.get('/getLatestTradesBySymbol/:symbol',getLatestTrade);

export default tradeRoutes;