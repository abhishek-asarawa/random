const express = require('express');
const normalUser = express.Router();

const normalController = require('../controller/normalController');
const authentication = require('../middleware/authentication');
const adminAuthentication = require('../middleware/adminAuthentication');


normalUser.get('/', normalController.homePage);
normalUser.get('/login', normalController.loginPage);
normalUser.get('/register', normalController.registerPage);

normalUser.get('/edit', authentication, normalController.editPage);
normalUser.get('/delete', authentication, normalController.deletePage);

normalUser.get('/makeAdmin', adminAuthentication, normalController.makeAdminPage);
normalUser.get('/admin', adminAuthentication, normalController.adminPage);

normalUser.get('/addProduct', adminAuthentication, normalController.productAddPage);


module.exports = normalUser;