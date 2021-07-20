const mongoose = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.oona4.mongodb.net/brainyybones?retryWrites=true&w=majority",{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    });
        
    console.log('DB connected');
}

module.exports = connectDB;