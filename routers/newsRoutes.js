import express from 'express';
import { getAllNews } from '../controlers/newsController.js';

const newsRouters = express.Router();

newsRouters.get('/getAll',getAllNews);

export default newsRouters;