const salesModel = require('../models/salesModel');
const { salesValidation } = require('../validations/salesValidation');

const create = async (salesArray) => {
    const validation = await salesValidation(salesArray);

    if (validation.err) {
        return validation;
    }

    return salesModel.create(salesArray);
};

const getAll = async () => {
    const data = await salesModel.getAll();

    if (data.length === 0) return ({ err: { code: 'not_found', message: 'Sale not found' } });

    return ({ sales: [...data] });
};

const getById = async (id) => {
    const data = await salesModel.getById(id);

    if (data.length === 0) return ({ err: { code: 'not_found', message: 'Sale not found' } });

    return data[0];
};

module.exports = { create, getAll, getById };
