import express from 'express';
import { sayHello,getLatestQuoteBySymbol,createOrder,getAllOrders,getOrderById } from '../controlers/tradeController.js';

const tradeRoutes = express.Router();

tradeRoutes.get('/hello',sayHello);
tradeRoutes.get('/getLatestQuoteBySymbol/:symbol',getLatestQuoteBySymbol);
tradeRoutes.post('/createOrder',createOrder);
tradeRoutes.get('/getAllOrders',getAllOrders);
tradeRoutes.get('/getOrderById/:id',getOrderById);

export default tradeRoutes;