const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


const userRoute = require("./routes/user");
const homeRoute = require("./routes/home");


mongoose.connect('mongodb://localhost/studentData', { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Database is connected'))
.catch(err => console.log(err)); 


const app = express()


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', homeRoute);
app.use('/users/', userRoute);


app.listen(3000, () => {
    console.log('server is running...');
});