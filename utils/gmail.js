const nodemailer=require('nodemailer')
require('dotenv').config()
//s1-create a transport

function  mail(email,username){
    const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAILUSER,
        pass:process.env.GMAILPASS
    }
    })
    //s2compose a message
    let messageformat={
        from: process.env.GMAILUSER, // sender address
        to: email, // list of recipients
        subject: "ACCOUNT CREATION", // subject line
        text: "", // plain text body
        html: `<b>Hi ${username},your account is created succesfully</b>`, // HTML body
      }
    
    //s3 send a mail
    transporter.sendMail(messageformat)
    console.log("email sent")

}

module.exports=mail