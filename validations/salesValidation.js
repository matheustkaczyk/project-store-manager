const { ObjectId } = require('mongodb');
const productsModel = require('../models/productsModel');

const message = {
    IdOrQty: 'Wrong product ID or invalid quantity',
};

const verifyQuantity = (sales) => {
    sales.every((sale) => {
        if (sale.quantity <= 0 || typeof sale.quantity !== 'number') {
            return ({
                err: { code: 'invalid_data', message: message.IdOrQty },
            });
        }
    });

    return true;
};

const verifyProductId = async (sales) => {
    const allProducts = await productsModel.findAll();
    const checking = sales.every(({ productId }) => allProducts.products
    .some(({ _id: id }) => ObjectId(id) === ObjectId(productId)));

    if (!checking) {
        return ({ err: {
            code: 'invalid_data',
            message: message.IdOrQty,
        } });
    }

    return true;
};

const salesValidation = async (sales) => {
    // if (sales.every((sale) => !(ObjectId.isValid(sale.productId)))) {
    //     return ({
    //         err: { code: 'invalid_data', message: message.IdOrQty },
    //     });
    // }

    sales.every((sale) => verifyQuantity(sale));

    verifyProductId(sales);

    return true;
};

module.exports = { salesValidation };
