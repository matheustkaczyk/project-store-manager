const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const create = async (sale) => getConnection()
    .then((db) => db.collection('sales').insertOne({ itensSold: [...sale] }))
    .then((result) => (result.ops[0]));

const getAll = async () => getConnection()
    .then((db) => db.collection('sales').find().toArray())
    .then((result) => (result));

const getById = async (id) => getConnection()
    .then((db) => db.collection('sales').find({ _id: ObjectId(id) }).toArray())
    .then((result) => result);

const update = async (id, sale) => getConnection()
    .then((db) => db.collection('sales').updateOne({ _id: ObjectId(id) },
    {
        $set: sale,
    }))
    .then((result) => result);

module.exports = { create, getAll, getById, update };