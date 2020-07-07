const express = require = require('express');
const router = express.Router();
//routes
router.get('/',(req,res) => {
    // res.send('Hello World');
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index',{title:'Programming in Node JS'});
    //console.log(__dirname + '/views/index.html')
    //console.log(path.join(__dirname + 'views/index.html'));
 })

 router.get('/contact',(req,res) => {
    res.render('contact',{title:'Contact Page'});
 })

 router.get('/about',(req,res)=>{
   res.render('about',{title:'About Page'});
 })
 module.exports= router;