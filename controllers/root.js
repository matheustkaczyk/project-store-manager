const express = require('express');
const productsController = require('./productsController');

const Router = express.Router({ mergeParams: true });

Router.post('/', productsController.create);
Router.get('/', productsController.findAll);
Router.get('/:id', productsController.findById);

module.exports = Router;
