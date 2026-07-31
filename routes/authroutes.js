const express=require('express')
let router=express.Router();
const {createaccount}=require('../controllers/authcontroller')
//http/localhost:3000/api/
router.post('/register',createaccount)
router.post('/login',)
module.exports=router