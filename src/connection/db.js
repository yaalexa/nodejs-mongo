const mongo = require('mongoose');
const configdb = require('../config/config.js')
async function connectdb() {
    const mongourl = configdb.conecionbd.MOGNGO_URI;
    await mongo.connect(mongourl);
    console.log('conectando a la bd mongo');
}

module.exports = connectdb;