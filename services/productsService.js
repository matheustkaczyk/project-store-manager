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

    return productsModel.create(name, quantity);
};

module.exports = { create };
