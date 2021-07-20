const nodemailer = require('nodemailer')   
             
const sendEmail = (options) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.in',
        port: 587,                                                    
        secure: false,
        auth : {
            user :"noreply@brainyybones.com",
            pass : "Brainyydatabase107"
        },
    })

    let mainOptions = {
        from :  "noreply@brainyybones.com",
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




