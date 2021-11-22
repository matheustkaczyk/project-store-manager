const salesService = require('../services/salesServices');

const create = async (req, res, next) => {
    try {
        const salesArray = req.body;

        const data = await salesService.create(salesArray);

        if (data.err) return res.status(422).json(data);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const getAll = async (_req, res, next) => {
    try {
        const data = await salesService.getAll();

        if (data.err) return res.status(404).json(data);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await salesService.getById(id);

        if (data.err) return res.status(404).json(data);

        res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(({ err: { code: 'not_found', message: 'Sale not found' } }));
    }
};

module.exports = { create, getAll, getById };