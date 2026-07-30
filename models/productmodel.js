let mongoose=require('mongoose')

let productsschema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}
})

let productsmodel=mongoose.model('products',productsschema)
module.exports=productsmodel