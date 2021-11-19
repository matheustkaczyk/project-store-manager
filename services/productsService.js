const productsModel = require('../models/productsModel');
const productsValidation = require('../validations/productsValidation');
const { idValidation } = require('../validations/idValidation');

const create = async (name, quantity) => {
    const validation = productsValidation(name, quantity);

    if (validation !== true) {
        return validation;
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

const findAll = async () => productsModel.findAll();

const findById = async (id) => {
    const validate = idValidation(id);

    if (validate !== true) {
        return validate;
    }

    return productsModel.findById(id);
};

const updateById = async (id, name, quantity) => {
    const validation = productsValidation(name, quantity);

    if (validation !== true) {
        return validation;
    }

    return productsModel.updateById(id, name, quantity);
};

const remove = async (id) => {
    try {
        const doesExist = await productsModel.findById(id);

        if (doesExist.length === 0) {
            return ({ err: { code: 'invalid_data', message: 'Wrong id format' } });
        }
    
        if (id && doesExist) {
            productsModel.remove(id);
        }
    
        return (doesExist[0]); 
    } catch (error) {
        return ({ err: { code: 'invalid_data', message: 'Wrong id format' } });
    }
};

module.exports = { create, findAll, findById, updateById, remove };
