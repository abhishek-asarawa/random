const express = require('express');
const {studentController} = require("../controller/studentController");


user = express.Router()


user.post("/register", studentController.create);
user.get("/data/", studentController.show);
user.get('/data/:id', studentController.specific);
user.put('/update', studentController.update);
user.delete('/delete/:id', studentController.delete);


module.exports = user