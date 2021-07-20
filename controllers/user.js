const User = require("../models/User");
const Insta = require("instamojo-nodejs");
const sendEmail = require("../utils/sendEmail");
const url = require("url");

exports.register = async (req, res, next) => {
  try {
    let userr = await User.findOne({$or:[{ email : req.body.email}, {phone: req.body.phone}]})

    if(userr){
      return res.status(404).send("fail")
    }
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      date: req.body.date,
      time: req.body.time,
      issue: req.body.issue,
    });
    try{
    await sendEmail({
                to: req.body.email,
                subject: "Confirmation from Brainybones",
                text:`
                <h3>Hey ${user.name}</h3>
                <br>
                <br>
                <p style="font-size:20px">Thank you for choosing Brainyy Ears. This email is a confirmation of your Active Listening session with a Brainyy Ears Volunteer. Your session booked at ${user.time.substring(0,8)} on ${user.date} for 15 minutes. See you at the session.</p>
                <br>
                <h2>Regards,</h2>
                <h2>Team BrainyyBones</h2>
              `
              });
            }catch(err){
              return res.status(404).send("fail")
            }
            res.send(user)
  } catch (error) {
    return res.status(404).send("fail")
  }
}

// exports.payment = async (req, res, next) => {


//   const API_KEY = "test_1fe393a860672c4d70a6ff841a5";

//   const AUTH_KEY = "test_288dd745089966bfcc9960a39a0";

//   Insta.setKeys(API_KEY, AUTH_KEY);

//   Insta.isSandboxMode(true);

//   let name = req.body.name;
//   let email = req.body.email;
//   let phone = req.body.phone;
//   let date = req.body.date;
//   let time = req.body.time;
//   let problem = req.body.problem;

//   var data = new Insta.PaymentData();

//   data.redirect_url = req.body.redirect_url;
//   data.send_email = "False";
//   data.purpose = `Confirming your BrainyyBones Session at ${time} on ${date}`;

//   data.amount = 49;
//   data.name = name;
//   data.email = email;
//   data.phone = phone;
//   data.webhook = "http://www.example.com/webhook/";
//   data.allow_repeated_payments = false;

//   Insta.createPayment(data, function (error, response) {
//     if (error) {
//       next(error);
//     } else {
//       console.log(response);
//       const responseData = JSON.parse(response);
//       const redirectUrl = responseData.payment_request.longurl;
//       console.log(redirectUrl);
//       res.status(200).json(redirectUrl);
//     }
//   });
// };

// exports.callback = async (req, res, next) => {
//   console.log("In Callback1");
//   let url_parts = url.parse(req.url, true);
//   console.log("In Callback2");
//   responseData = url_parts.query;
//   console.log("In Callback3");

//   console.log(responseData);
//   console.log("In Callback4");
//   if (responseData.payment_id) {
//     let userId = responseData.user_id;
//     User.findOneAndUpdate( { email: userId }, { paid : true}, { new: true } )
//     	.then( ( user ) => console.log("Success") )
//     	.catch( ( error) => res.json( error ) );

//       let user = await User.findOne({ email: userId})
     
//       try {     
//         await sendEmail({
//           to: user.email,
//           subject: "BrainyyBones Contact",
//           text:`
//           <h3>Hey ${user.name}</h3>
//           <br>
//           <br>
//           <p style="font-size:20px">Thank you for choosing Brainyy Ears. This email is a confirmation of your Active Listening session with a Brainyy Ears Volunteer. Your session booked at ${user.time.substring(0,8)} on ${user.date} for 15 minutes. See you at the session.</p>
//           <br>
//           <h2>Regards,</h2>
//           <h2>Team BrainyyBones</h2>
//         `

//         });
//       } catch(error){
//         next(error);
//       }
//   }
//   return res.redirect("https://nhtrewm.herokuapp.com/payment-complete");
// };
