const Sequelize = require('sequelize');

const dbConfig = require('./config');

const Usuarios = require('../models/Usuarios');
const TiposDocumento = require('../models/TiposDocumento');
const Documentos = require('../models/Documentos');

const sequelize = new Sequelize(dbConfig);

Usuarios.init(sequelize);
Documentos.init(sequelize);
TiposDocumento.init(sequelize);

Usuarios.associate(sequelize.models);
Documentos.associate(sequelize.models);
TiposDocumento.associate(sequelize.models);

module.exports = sequelize;