require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//environment
const DATABASE = process.env.DATABASE;
const PORT =  process.env.PORT || 8000


//app
const app = express();



//route middleware
app.use('/api',userRoute);
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//db
mongoose.connect(DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>console.log('Database Connected'))



// //routes
// app.get('/',(req,res)=>{
//     res.send('Welcome Home')
// })

app.listen(PORT,()=>{
    console.log(`Application is running on port ${PORT}`)
})