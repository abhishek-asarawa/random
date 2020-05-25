const express = require('express');
const user = express.Router();

const { userController } = require('../controller/userController');


user.get('/details/:username', userController.show);
user.post('/register', userController.create);
user.post('/edit', userController.update);
user.get('/delete', userController.delete);
user.post('/login', userController.login);
user.get('/logout', userController.logout);
user.post('/makeAdmin', userController.makeAdmin);
user.get('/addCart/:id', userController.addCart);


module.exports = user;