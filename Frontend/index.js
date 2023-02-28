const express = require('express');
const app = express()
const path = require('path');
const router = express.Router();
const port = 3001;

app.use(express.static('public'));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main.html'));
  });
router.get('/Csignup',function(req,res){
    res.sendFile(path.join(__dirname+'/Csignup.html'));
  });
router.get('/Tsignup',function(req,res){
    res.sendFile(path.join(__dirname+'/Tsignup.html'));
  });
router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
  });
router.get('/dashboard',function(req,res){
    res.sendFile(path.join(__dirname+'/dashboard.html'));
  });
router.get('/allTheraph',function(req,res){
    res.sendFile(path.join(__dirname+'/allTherapist.html'));
  });
app.use('/', router);

app.listen(port,()=>{
    console.log('server running')
})