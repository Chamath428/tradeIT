import express from 'express';
import { sayHello } from '../controlers/tradeController.js';

const tradeRoutes = express.Router();

tradeRoutes.get('/hello',sayHello);

export default tradeRoutes;