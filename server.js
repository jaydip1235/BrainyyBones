const express= require('express')
const app = express()
const connectDB  = require('./config/db')
const errorHandler = require('./middleware/error')
const bodyParser = require('body-parser')
const path = require('path')

connectDB();

// app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.use('/api/user',require('./routes/user'))
// app.use('/api/private',require('./routes/private'))

//Error (Last piece of middleware)
app.use(errorHandler)

const PORT = process.env.PORT||5000;


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
      });
}


const server = app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged Error : ${err}`)
    server.close(()=>{ 
        process.exit(1)
    });
})