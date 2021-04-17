const { json } = require('express');
const express = require('express');
const path = require('path');


//initialization
const app = express();


//routes
app.get('/',function(req,res){
    res.sendFile('index.html',{root:path.join(__dirname,'views')});
});

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//static files

app.use('/public', express.static(path.join(__dirname, 'public')));

//listen
app.listen('3000');
console.log('listen on port 3000');
