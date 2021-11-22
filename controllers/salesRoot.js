const express = require('express');
const salesController = require('./salesController');

const Router = express.Router({ mergeParams: true });

Router.post('/', salesController.create);
Router.get('/', salesController.getAll);
Router.get('/:id', salesController.getById);
Router.put('/:id', salesController.update);

module.exports = Router;
