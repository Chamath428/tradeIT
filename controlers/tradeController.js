import express from 'express';
import { alpacaConfig } from '../configs/alpaca.js';
import docClient from '../configs/dynamodb.js';


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

export const createOrder = async(req,res)=>{
    try{
        const order = await alpacaConfig.createOrder({
            symbol:req.body.symbol,
            qty:req.body.qty,
            side:"buy",
            type:"market",
            time_in_force:"gtc"
        });

        const params = {
            TableName: 'trade_info',
            Item: {
              'id': order["id"],
              'client_order_id': order["client_order_id"],
              'created_at': order["created_at"],
              'updated_at': order["updated_at"],
              'submitted_at': order["submitted_at"],
              'asset_id': order["asset_id"],
              'symbol': order["symbol"],
              'qty': order["qty"],
              'order_type': order["order_type"],
              'status': order["status"]
            }
          };

          docClient.put(params,(err,data)=>{
            if(err){
                res.status(200).json({message:"Trade creted successfull! Error happened when recording data into the database."})
            }else{
                res.status(200).send(order);
            }
          });  
    }catch(error){
        res.status(200).json({message:error.response.data.message});
    }
}

export const getAllOrders = async(req,res)=>{
    try{
        const orders = await alpacaConfig.getOrders();
        res.status(200).send(orders);
    }catch(error){
        res.status(200).json({message:"Error while fetching order dtails"});
    }
}

export const getOrderById = async(req,res)=>{
    try{
        const order = await alpacaConfig.getOrder(req.params.id);
        res.status(200).send(order);
    }catch(error){
        res.status(200).json({message:error.response.data.message});
    }
}

export const getLatestTrade = async (req,res)=>{
   await alpacaConfig.getLatestTrade(req.params.symbol).then((trade)=>{
        res.status(200).send(trade);
    }).catch((error)=>{
        res.status(200).json({message:error.message});
    })
}