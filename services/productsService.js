const productsModel = require('../models/productsModel');
const productsValidation = require('../validations/productsValidation');

const create = async (name, quantity) => {
    const { error } = productsValidation(name, quantity);

    if (error) {
        return {
            err: {
                code: 'invalid_data', message: `${error.details[0].message}`,
            },
        };
    }

    const peopleVerify = await productsModel.findByName(name);
    if (peopleVerify) {
        return {
            err: {
                code: 'invalid_data', message: 'Product already exists',
            },
        };
    }

    return productsModel.create(name, quantity);
};

module.exports = { create };
