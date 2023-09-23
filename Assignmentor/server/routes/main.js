const express = require('express');
const  router = express.Router();
const Post = require('../models/post1');
const bodyParser = require('body-parser');
//Routes

router.get('',async(req,res)=>{
    try{
        const locals= {
            title:'assignmentor',
            snippet:'My project'
        }
        let perpage = 8;
        let page = req.query.page || 1; 

        const data = await Post.aggregate([{$sort:{createdAt: -1}}])
        .skip(perpage * page -perpage)
        .limit(perpage)
        .exec();

        const count = await Post.count();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage<=Math.ceil(count/perpage);
        res.render('index1',{
            locals,
            data,
            current:page,
            nextPage:hasNextPage ? nextPage :null
        });
    }catch(error){
        console.log(error);
    }
    
 });
//  router.get('/task/:id',async(req,res)=>{
//     try{
//         const locals= {
//             title:'assignmentor',
//             snippet:'My project'
//         }
//         let slug = req.params.id;
//         const data = await Post.findById({_id:slug})
//         res.render('post',{locals,data})
//     }catch(error){
//         console.log(error);
//     }
// });




router.get('/about',(req,res)=>{
    res.render('about1');
});
module.exports = router;
