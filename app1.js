const express=require('express');
var bodyParser = require('body-parser');
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);
var route=require("./app/routes/route")

app.use('/user',route);

app.listen(2000,function(){
    console.log('Server running at port 2000')
})