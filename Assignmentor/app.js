require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
//const {connectToDb,getDb} = require('./derver/config/db')
 const connectDB = require('./server/config/db');
const app = express();


const PORT = 3000 || process.env.PORT;
//connect to db
 connectDB();


app.use(express.static('public'));
//template engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'));
app.listen(PORT,(req,res)=>{
    console.log(`APP listening on port ${PORT}`);
});