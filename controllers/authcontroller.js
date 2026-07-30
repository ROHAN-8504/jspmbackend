let users=require('../models/usermodel')
const bcrypt=require('bcrypt')
let mail=require('../utils/gmail')
exports.createaccount=async (req,res)=>{
const {username,password,email,role}=req.body
    
  if(!username || !password  || !email   ||!role)
   return res.json({msg:"missing fields"})

  let isuserfound=await users.findOne({username})
  //c1-check whether user exist or not
  if(isuserfound) return res.json({msg:"user alreday exists"})

    //convert the pasword into hash passwords
   let hashedpassword=await bcrypt.hash(password,10)

  await  users.create({username,password:hashedpassword,email,role})

  res.json({msg:"registration succesfull"})

  mail(email,username)
  
}