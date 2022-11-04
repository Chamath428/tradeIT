import express from 'express';
import tradeRoutes from './routers/tradeRoutes.js';

const app = express();
const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`APP is running on port:${PORT}`)
});

app.use('/',tradeRoutes);