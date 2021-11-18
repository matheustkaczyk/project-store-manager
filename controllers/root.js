const express = require('express');
const productsController = require('../controllers/productsController');

const Router = express.Router({ mergeParams: true });

Router.post('/', productsController.create)

module.exports = Router;
