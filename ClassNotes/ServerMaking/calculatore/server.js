// Packages needed
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();


app.use(morgan('tiny')); // This give some detail about route.
app.use(bodyParser.json()); /* This is used when we want to 
                            decode the request data, It convert
                            it in Object.*/


app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, I am a calculator.');
})


app.get('/add/:Number1/:Number2', (req, res) => {
    // console.log(req.params);    // This give parameters of URL.
    let a = Number(req.params.Number1);
    let b = Number(req.params.Number2);
    
    res.send(`${a} + ${b} = ${a+b}`);
})


app.get('/substraction/:Number1/:Number2', (req, res) => {
    let a = Number(req.params.Number1);
    let b = Number(req.params.Number2);
    
    res.send(`${a} - ${b} = ${a - b}`);
})


app.get('/multiplication/:Number1/:Number2', (req, res) => {
    let a = Number(req.params.Number1);
    let b = Number(req.params.Number2);
    
    res.send(`${a} x ${b} = ${a * b}`);
})


app.get('/divide/:Number1/:Number2', (req, res) => {
    let a = Number(req.params.Number1);
    let b = Number(req.params.Number2);
    
    res.send(`${a} / ${b} = ${a / b}`);
})


app.get('/square/:Number1/', (req, res) => {
    let a = Number(req.params.Number1);
    
    res.send(`Square of ${a} is ${a ** 2}`);
})


app.get('/cube/:Number1/', (req, res) => {
    let a = Number(req.params.Number1);
    
    res.send(`Cube of ${a} is ${a ** 3}`);
})


app.get('/square_root/:Number1/', (req, res) => {
    let a = Number(req.params.Number1);
    
    res.send(`Square root of ${a} is ${a ** (1/2)}`);
})


app.get('/cube_root/:Number1/', (req, res) => {
    let a = Number(req.params.Number1);
    
    res.send(`Cube root of ${a} is ${a ** (1/3)}`);
})


app.listen(3000, () =>{
    console.log("Server is running..")
});