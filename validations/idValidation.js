const { ObjectId } = require('mongodb');

const idValidation = (id) => {
    if (!(ObjectId.isValid(id))) {
        return {
            err: {
                code: 'invalid_data',
                message: 'Wrong id format',
            },
        };
    }
    return true;
};

module.exports = { idValidation };
