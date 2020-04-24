const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
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

Usuarios.init(connection);
TipoDocumento.init(connection);
Documentos.init(connection);

Usuarios.associate(connection.models);
TipoDocumento.associate(connection.models);
Documentos.associate(connection.models);

module.exports = connection;
