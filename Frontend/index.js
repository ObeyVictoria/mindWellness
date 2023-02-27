const express = require('express');
const app = express()
const path = require('path');
const router = express.Router();
const port = 3001;

app.use(express.static('public'));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
  router.get('/dashboard',function(req,res){
    res.sendFile(path.join(__dirname+'/dashboard.html'));
  });
  router.get('/allTheraph',function(req,res){
    res.sendFile(path.join(__dirname+'/allTheraph.html'));
  });
app.use('/', router);

app.listen(port,()=>{
    console.log('server running')
})