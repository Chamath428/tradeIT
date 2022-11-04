import express from 'express';
import { alpacaConfig } from '../configs/alpaca.js';


export const sayHello =()=>{
    console.log("Hello");
}

export const getLatestQuoteBySymbol = async (req,res)=>{
    try{
        const trades = await alpacaConfig.getLatestQuote(req.params.symbol);
        res.status(200).send(trades);
    }catch(error){
        res.status(200).json({message:error.message})
    }
}
