const productModel = require('../models/productsModel');

const message = {
    IdOrQty: 'Wrong product ID or invalid quantity',
};

const verifyQuantity = (sale) => {
    if (sale.quantity <= 0 || typeof sale.quantity !== 'number') {
        return false;
    }
    return true;
};

const verifyProductId = async (sales) => {
    const checking = sales.every(async ({ productId }) => {
        const checkingId = await productModel.findById(productId);
        return checkingId;
    });

    if (!checking) {
        return ({ err: {
            code: 'invalid_data',
            message: message.IdOrQty,
        } });
    }

    return true;
};

const salesValidation = async (sales) => {
    const verifyQtd = sales.find((sale) => verifyQuantity(sale) === false);

    if (verifyQtd !== undefined) {
        return ({
            err: { code: 'invalid_data', message: message.IdOrQty },
        });
    }

    const verifyProdId = await verifyProductId(sales);

    if (verifyProdId.err) {
        return verifyProdId;
    }

    return true;
};

const productValidation = async (sales) => {
    sales.forEach(async ({ productId }) => {
    const product = await productModel.findById(productId);
    const qtyCheck = product.some(({ quantity }) => quantity < 0);

    if (qtyCheck === true) {
        return ({
            err: {
                code: 'stock_problem', message: 'Such amount is not permitted to sell',
            },
        });
    }

    return qtyCheck;
    });
};

module.exports = { salesValidation, productValidation };
