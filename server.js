
const express=require('express')
const app=express();
const dotenv=require('dotenv')
let helmet=require('helmet')
dotenv.config();
const cors=require('cors')
let logging=require('./middlewares/logger')
let ratelimit=require('./middlewares/ratelimit')
let connection=require('./config/db')
let productsroutes=require('./routes/productroutes')
let authroutes=require('./routes/authroutes')
//middlewares
app.use(express.json())
app.use(cors())
app.use(ratelimit)
app.use(logging)z
ap.use(helmet())

app.disable('x-powered-by');

//routes
app.use('/products',productsroutes)
app.use('/api',authroutes)


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connection();
})