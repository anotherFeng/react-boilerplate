const express = require("express");
const morgan = require("morgan");
const bodyParse = require("body-parser");
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParse.urlencoded({extended: false}));
app.use(morgan("common"));

app.get('/import', (req,res)=>{
    res.end('hello');
})

app.listen(1128, ()=>{
    console.log(`listening port: 1128`);
})