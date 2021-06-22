const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res)=> {
    console.log('Malay Chandan');
    
    let a = req.body.firstValue;
    let b = req.body.secondValue;
    console.log(a);
    console.log(b);
    let c = (a*1) + (b*1);
    console.log(c);
    if(!c){
        res.sendFile(path.join(__dirname, './public', 'index.html'));
    }else{
        res.send(`<h1>Your output is ${c}</h1>`);
    }
    
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000......🐱‍💻')
})