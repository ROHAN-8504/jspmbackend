let users=require('../models/usermodel')
exports.createaccount=async (req,res)=>{
const {username,password,email,role}=req.body
    
  if(!username || !password  || !email   ||!role)
   return res.json({msg:"missing fields"})

  let isuserfound=await users.findOne({username})
  //c1-check whether user exist or not
  if(isuserfound) return res.json({msg:"user alreday exists"})

  await  users.create({username,password,email,role})

  res.json({msg:"registration succesfull"})
  
}