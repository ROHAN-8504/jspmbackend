const express=require('express');
let router=express.Router();
const {getproducts,createproduct,bulkproducts,deleteproduct,updateproduct}=require('../controllers/productcontroller')
//http://localhost:3000/products/
router.get('/',getproducts)
router.post('/',createproduct)
router.post('/bulk',bulkproducts)
router.delete('/:id',deleteproduct)
router.patch('/:id',updateproduct)
module.exports=router