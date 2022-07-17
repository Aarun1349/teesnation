require('dotenv').config();
const express = require('express')
const app = express();
const PORT =  process.env.PORT || 8000


app.get('/',(req,res)=>{
    res.send('Welcome Home')
})

app.listen(PORT,()=>{
    console.log(`Application is running on port ${PORT}`)
})