const express = require('express');
const productsController = require('./productsController');

const Router = express.Router({ mergeParams: true });

Router.post('/', productsController.create);

module.exports = Router;
