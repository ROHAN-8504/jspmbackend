const mongoose=require('mongoose')
let connection=async ()=>{
    try {
           await mongoose.connect('mongodb+srv://demo:demo@cluster0.mjl7vcw.mongodb.net/jspmbackend')
           console.log("db is connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
module.exports=connection