const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
app.set('view engine','ejs');
mongoose.connect('mongodb+srv://tharun42:I5z4fg0NPfsxVSs6@cluster1000.88fu90r.mongodb.net/')
.then(()=>{
    console.log('database connected')
}).catch(()=>{
    console.log('some error')
})
const taskstore = require('./server/models/post1');
const { log } = require('async');

app.listen(3000);
app.use(express.urlencoded({extended:true}))
app. use(express. static('public'));
//const details = taskstore.find({});
// app.post('/',async (req,res)=>{
//     const data = new taskstore(req.body)
//     await data.save();
//     details.exec(function(error,data){
//         if(error){
//             console.log(error)
//         }
//         res.render('index' , {data:details})
//     })
    
 
 //})
app.get('/',async(req,res)=>{
    try{
       // const datar = await taskstore.find();
        res.render('index');
    }catch(err){
        console.log(err);
    }
    
})



app.get('/about',(req,res)=>{
    res.render('about1')
})
app.get('/plus',(req,res)=>{
    res.render('plus')
})
