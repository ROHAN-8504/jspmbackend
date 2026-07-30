let logging=(req,res,next)=>{
  console.log("reuest is registered",req.method,Date.now());
  next();
}
module.exports=logging