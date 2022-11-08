import express from 'express';
import tradeRoutes from './routers/tradeRoutes.js';
import assetRouters from './routers/assetRoutes.js';
import newsRouters from './routers/newsRoutes.js';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const app = express();
app.use(express.json());
const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`APP is running on port:${PORT}`)
});

app.use('/market',tradeRoutes);
app.use('/assets',assetRouters);
app.use('/news',newsRouters);