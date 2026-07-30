const express=require('express');
let router=express.Router();
const {getproducts,createproduct,bulkproducts}=require('../controllers/productcontroller')
//http://localhost:3000/products
router.get('/',getproducts)
router.post('/',createproduct)
router.post('/bulk',bulkproducts)
module.exports=router