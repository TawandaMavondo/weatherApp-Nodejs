const express = require('express');
const hbs = require('hbs');
const weatherAPI = require('./weatherApi');

hbs.registerPartials(__dirname+'views/partials');
var app = express();
app.use(express.static(__dirname+'/views'));
app.set('view engine','hbs');



app.get('/',(req,res)=>{
    res.render('index.hbs',{});
});

app.get('/data',(req,res)=>{
    console.log(weatherAPI.weather("Marondera"));
    // res.send();
});
app.listen(3000,()=>{
    console.log("Server Started at port:3000");
})