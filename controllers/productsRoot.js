const express = require('express');
const productsController = require('./productsController');

const Router = express.Router({ mergeParams: true });

Router.post('/', productsController.create);
Router.get('/', productsController.findAll);
Router.get('/:id', productsController.findById);
Router.put('/:id', productsController.updateById);

module.exports = Router;
