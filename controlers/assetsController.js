import express from 'express'
import Alpaca from '@alpacahq/alpaca-trade-api'
import { alpacaConfig } from '../configs/alpaca.js';

export const getActiveAssets=(req,res)=>{
  alpacaConfig.getAssets({
        status: 'active',
        asset_class:'us_equity'
      }).then((assets) => {
        res.status(200).send(assets);
      }).catch((error)=>{
        console.log(error.data);
      })
}

export const getAssetBySymbol = (req,res)=>{
  alpacaConfig.getAsset(req.params.symbol).then((asset)=>{
        res.status(200).send(asset);
    }).catch((error)=>{
        res.status(200).json({message:error.response.data.message})
        console.log(error.response.data.message);
      })
}