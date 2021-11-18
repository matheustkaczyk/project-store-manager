const Joi = require('joi');

const productsValidation = (name, quantity) => {
    const data = { name, quantity };

    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        quantity: Joi.number().integer().min(1).required(),
    });

    return schema.validate(data);
};

module.exports = productsValidation;
