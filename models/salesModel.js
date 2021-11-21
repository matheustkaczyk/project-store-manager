const { getConnection } = require('./connection');

const create = async (sale) => getConnection()
    .then((db) => db.collection('sales').insert({ itensSold: [...sale] }))
    .then((result) => (result.ops[0]));

module.exports = { create };