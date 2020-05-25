const productController = require('../controller/productController');
const authentication = require('../middleware/authentication');
const express = require('express');

productRoute = express.Router();


productRoute.post('/add', productController.create);
productRoute.get('/show', authentication, productController.show)


module.exports = productRoute;