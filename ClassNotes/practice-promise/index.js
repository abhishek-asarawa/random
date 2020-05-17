const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();


app.use(morgan('tiny'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send('Are you ready?');
});


app.post("/savedata", (req, res) => {
    let url = req.body.url
    let fileName = req.body.file
    Processing(url, res, fileName);
});


app.get("/readData", (req, res) => {
    let fileName = req.query.file
    let inStream = fs.createReadStream(`result/${fileName}`);
    let targetStream = res;
    inStream.pipe(targetStream);
});


app.put("/updateFile", (req, res) => {
    let fileName = req.body.file;
    let url = req.body.url;
    Processing(url, res, fileName, true);
});


app.delete("/deleteFile", (req, res) => {
    let fileName = req.body.file;
    fs.unlinkSync(`result/${fileName}`, (err) => {
        if(err) {
            console.log(err);
            return res.send(err);
        }
    });
    res.send("Done");
});


app.listen(3000, () => {
    console.log("Server is running..");
});


//functions
async function getData(url){
    let response = await fetch(url);
    let data = await response.text();
    return data;
};


function Processing(url, response, file = 'output.txt', update = false) {
    getData(url)
    .then((res) => {
        if(update){
            updateData(res, file, response);
        } else {
            saveData(res, file, response);
        }
    })
    .catch(err => {
        console.log(err);
        response.send("We are not able to take data from this url.");
    })
};


function saveData(data, file, response) {
    fs.writeFile(`result/${file}`, data, (err) => {
        if(err) {
            console.log(err);
            response.send("We are not able to access Database");
        };
    });
    response.send("Process is done.");
};


function updateData(data, file, response) {
    fs.appendFile(`result/${file}`, data, (err) => {
        if(err) {
            console.log(err);
            response.send("File not found");
        };
    });
    response.send("Process is done.");
};