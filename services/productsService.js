const productsModel = require('../models/productsModel');
const productsValidation = require('../validations/productsValidation');

const create = async (name, quantity) => {
    const { error } = productsValidation(name, quantity);

    if (error) {
        return {
            err: {
                code: 'invalid_data',
                message: `${error.details[0].message}`,
            },
        };
    }

    if (productsModel.findByName(name)) {
        return {
            err: {
                code: 'invalid_data',
                message: 'Product already exists',
            },
        };
    }
    return productsModel.create(name, quantity);
};

module.exports = { create };
