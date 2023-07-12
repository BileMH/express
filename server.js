const express = require ('express');
const fs = require('fs');
const app= express();
const PORT =4500;
const v = require('./Verif');
const { log } = require('console');

app.get('/' ,v,(req,res)=>{
    fs.readFile('./NavbarHome.html','utf8',(err,data)=>{
        err ? res.send('file not found')&& console.error(err) : res.send(data)
    })
})
app.get('/NavbarHome.html',v, (req,res)=>{
    fs.readFile('./NavbarHome.html','utf8',(err,data)=>{
        err ? res.send('file not found')&& console.error(err) : res.send(data)
    })
})
app.get('/OurServices.html',v, (req,res)=>{
    fs.readFile('./OurServices.html','utf8',(err, data)=>{
        err ? res.send('file not found')&& console.error(err) : res.send(data)
    })
})
app.get('/Contactus.html',v, (req,res)=>{
    fs.readFile('./Contactus.html','utf8',(err,data)=>{
        err ? res.send('file not found')&& console.error(err) : res.send(data)
    })
})









app.listen(PORT,(req,res)=>{
    console.log(`server running : port: ${PORT}`)
})