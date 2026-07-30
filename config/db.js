const dotenv=require('dotenv')
dotenv.config();
const mongoose=require('mongoose')
let connection=async ()=>{
    try {
           await mongoose.connect(process.env.MONGODBURL)
           console.log("db is connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
module.exports=connection