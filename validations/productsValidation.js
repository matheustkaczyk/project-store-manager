// const Joi = require('joi');

const productsValidation = (name, quantity) => {
    const data = { name, quantity };

    if (name.length < 4) {
        return {
        err: {
            code: 'invalid_data',
            message: '"name" length must be at least 5 characters long',
        },
    }; 
}

    if (quantity <= 0) {
        return {
            err: {
                code: 'invalid_data',
                message: '"quantity" must be larger than or equal to 1',
            },
        };
    }

    // const schema = Joi.object({
    //     name: Joi.string().min(5).required(),
    //     quantity: Joi.number().integer().min(1).required(),
    // });

    return true;
};

module.exports = productsValidation;
