const productsValidation = (name, quantity) => {
    if (name.length < 5) {
        return {
        err: { code: 'invalid_data', message: '"name" length must be at least 5 characters long' },
}; 
}

    if (quantity <= 0) {
        return {
            err: { code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' },
        };
    }

    if (typeof quantity !== 'number') {
        return {
            err: { code: 'invalid_data', message: '"quantity" must be a number' },
        };
    }

    return true;
};

module.exports = productsValidation;
