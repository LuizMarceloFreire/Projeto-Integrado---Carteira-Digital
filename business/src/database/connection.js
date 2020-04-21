const Sequelize = require('sequelize');
const Pessoas = require('../models/Pessoas');
const TipoDocumento = require('../models/TipoDocumento');
const Documentos = require('../models/Documentos');

const database = 'CarteiraDigital';
const user = 'root';
const password = '';
const host = {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorAliases: false,
}

const connection = new Sequelize(database, user, password, host);

Pessoas.init(connection);
TipoDocumento.init(connection);
Documentos.init(connection);

TipoDocumento.associate(connection.models);

module.exports = connection;
