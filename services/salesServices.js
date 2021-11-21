const salesModel = require('../models/salesModel');
const { salesValidation } = require('../validations/salesValidation');

const create = async (salesArray) => {
    const validation = await salesValidation(salesArray);

    if (validation.err) {
        return validation;
    }

    return salesModel.create(salesArray);
};

module.exports = { create };
