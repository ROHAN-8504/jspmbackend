const express=require('express')
let products=require('./products')
const app=express();
const port=3000

app.get('/products',(req,res)=>{
res.json(products)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})