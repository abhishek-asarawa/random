const express = require('express');
const chalk = require('chalk') // for debugging by coloring
const debug = require('debug')('app') // for debugging "app" here say what is debugged.
const app = express(); // made instance

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html')); // It will print in brower [localhost:3000]
})


app.get('/abhishek', function(req, res){
    res.send('Hello World Abhishek'); // It will print in brower [localhost:3000/abhishek]
})


app.get('/asarawa', function(req, res){
    res.send('Hello World Asarawa'); // It will print in brower [localhost:3000/asarawa]
})


app.post('/abhi', function(req, res){
    console.log(req.body)
    res.send('Hello Word Kattapa.');
})


app.listen(3000, () => {
    debug("I am running."+ chalk.green(3000)); // It will print in server
}); // For developer perpose 3000 
/*DEBUG=* node server.js or DEBUG=app node server.js or set DEBUG=* & node server.js for windows */
