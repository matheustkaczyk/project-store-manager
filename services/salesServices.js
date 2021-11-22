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

const update = async (id, sale) => {
    const validate = await salesValidation(sale);

    if (validate.err) return (validate);

    const data = await salesModel.update(id, { itensSold: sale });

    if (data.modifiedCount > 0) return ({ _id: id, itensSold: [...sale] });

    return ({ err: { code: 'not_found', message: 'Sale not found' } });
};

const remove = async (id) => {
    try {
        const previousData = await salesModel.getById(id);
        const data = await salesModel.remove(id);

        if (previousData.length === 0 || data.deletedCount === 0) {
            return ({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
        }

        return previousData[0];
    } catch (error) {
        return ({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
    }
};

module.exports = { create, getAll, getById, update, remove };
