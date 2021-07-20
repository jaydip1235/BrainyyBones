const nodemailer = require('nodemailer')   
             
const sendEmail = (options) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.in',
        port: 587,                                                    
        secure: false,
        auth : {
            user : process.env.EMAIL,
            pass : process.env.PASSWORD
        },
    })

    let mainOptions = {
        from :  process.env.EMAIL,
        to : options.to,
        subject : options.subject,
        html : options.text
    }

    transporter.sendMail(mainOptions,function(err, res){ 
        if(err) {
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}

module.exports = sendEmail




