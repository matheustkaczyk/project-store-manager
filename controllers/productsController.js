const productService = require('../services/productsService');

const create = async (req, res, next) => {
try {
    const { name, quantity } = req.body;
    
    const data = await productService.create(name, quantity);

    if (data.err) return res.status(422).json(data);

    return res.status(201).json(data);
} catch (error) {
    next(error);
}
};

const findAll = async (_req, res, next) => {
    try {
        const data = await productService.findAll();

        if (data) return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await productService.findById(id);

        if (data.err) return res.status(422).json(data);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = { create, findAll, findById };
