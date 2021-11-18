const nameLengthVal = (name) => {
    if (name.length < 4) {
        return {
        err: {
            code: 'invalid_data',
            message: '"name" length must be at least 5 characters long',
        },
    }; 
}
};

const nameTypeVal = (name) => {
    if (typeof name !== 'string') {
        return {
            err: {
                code: 'invalid_data',
                message: '"name" must be a string',
            },
        };
    }
};

const quantityVal = (quantity) => {
    if (quantity <= 0) {
        return {
            err: {
                code: 'invalid_data',
                message: '"quantity" must be larger than or equal to 1',
            },
        };
    }
};

const productsValidation = (name, quantity) => {
    nameLengthVal(name);
    nameTypeVal(name);
    quantityVal(quantity);
    return true;
};

module.exports = productsValidation;
