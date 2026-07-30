
const express=require('express')
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const cors=require('cors')
let logging=require('./middlewares/logger')
let connection=require('./config/db')
let productsroutes=require('./routes/productroutes')
let authroutes=require('./routes/authroutes')
//middlewares
app.use(express.json())
app.use(cors())
app.use(logging)

//routes
app.use('/products',productsroutes)
app.use('/api',authroutes)

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connection();
})