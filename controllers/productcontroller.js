let productsmodel=require('../models/productmodel')
const mongoose=require('mongoose')

exports.getproducts=async (req,res)=>{
let products =await productsmodel.find()
res.json(products)
}

exports.createproduct=async (req,res)=>{
const {title,price,image}=req.body
await productsmodel.create({title,price,image})
res.json({msg:"product saved"})
}

exports.bulkproducts=async (req,res)=>{
   try {
  await  productsmodel.insertMany(req.body)
  res.json({msg:"products are saved"})
   } catch (error) {
    res.json({msg:error.message})
   }
}