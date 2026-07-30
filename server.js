const express=require('express')
const app=express();
const cors=require('cors')
let logging=require('./middlewares/logger')
let connection=require('./config/db')
let productsroutes=require('./routes/productroutes')
//middlewares
app.use(express.json())
app.use(cors())
app.use(logging)

//routes
app.use('/products',productsroutes)

const port=3000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connection();
})