const { getConnection } = require('./connection');

const create = async (sale) => getConnection()
    .then((db) => db.collection('sales').insertMany(sale))
    .then((result) => result);

module.exports = { create };