import express from 'express'
import { alpacaConfig } from '../configs/alpaca.js'

export const getAllNews = async(req,res)=>{
    try{
        const news = await alpacaConfig.getNews({});
        res.status(200).send(news);
    }catch(error){
        console.log(error)
    }
}