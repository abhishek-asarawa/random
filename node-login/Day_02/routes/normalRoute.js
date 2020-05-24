const express = require('express');
const normalUser = express.Router();
const normalController = require('../controller/normalController');
const authentication = require('../middleware/authentication');


normalUser.get('/', normalController.homePage);
normalUser.get('/login', normalController.loginPage);
normalUser.get('/register', normalController.registerPage);
normalUser.get('/edit', authentication, normalController.editPage);
normalUser.get('/delete', authentication, normalController.deletePage);


module.exports = normalUser;