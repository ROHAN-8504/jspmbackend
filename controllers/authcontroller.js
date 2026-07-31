let users=require('../models/usermodel')
const bcrypt=require('bcrypt')
let mail=require('../utils/gmail')
let jwt=require('jsonwebtoken')
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

  //token 
  let payload={userid:username,useremail:email}


  let token=await jwt.sign(payload,process.env.SECRETKEY,{expiresIn:'7d'})


  res.json({msg:"registration succesfull",token})


  mail(email,username)
  
}

exports.login=async (req,res)=>{
const {email,password}=req.body

if(!email  || !password) return res.json({msg:"missing fields"})
let userfound=await users.findOne({email})
if(!userfound) return res.json({"msg":"user not found"})
    
  let checkpassword=await bcrypt.compare(password,userfound.password)
  if(!checkpassword) return  res.json({"msg":"email or password is incorrect"})

    res.json({msg:"login succesfull"})
}