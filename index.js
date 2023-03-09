const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv/config');

const app=express();
const PORT=process.env.PORT||4000;
const dbConnection=()=>{
    try{
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
        console.log('Connected to db');
    }catch(err){
        console.log(err);
    }
}

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Main homepage');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
});