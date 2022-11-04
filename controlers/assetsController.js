import express from 'express'
import Alpaca from '@alpacahq/alpaca-trade-api'

const apiKey = process.env['ALPACA_API_KEY_ID'];
const secrectKey = process.env['ALPACA_SECRET_KEY'];

const alpaca = new Alpaca({
    keyId: apiKey,
    secretKey: secrectKey,
    paper: true,
  })

export const getActiveAssets=(req,res)=>{
    alpaca.getAssets({
        status: 'active',
        asset_class:'us_equity'
      }).then((assets) => {
        res.status(200).send(assets);
      }).catch((error)=>{
        console.log(error.data);
      })
}

export const getAssetBySymbol = (req,res)=>{
    alpaca.getAsset(req.params.symbol).then((asset)=>{
        res.status(200).send(asset);
    }).catch((error)=>{
        res.status(200).json({message:error.response.data.message})
        console.log(error.response.data.message);
      })
}