const express = require('express');
const salesController = require('./salesController');

const Router = express.Router({ mergeParams: true });

Router.post('/', salesController.create);

module.exports = Router;
