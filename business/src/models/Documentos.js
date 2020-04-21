const { Model, DataTypes } = require('sequelize');

class Documentos extends Model {
    static init(sequelize) {
        super.init({
            imagem: DataTypes.BLOB(),
        }, {
            sequelize
        });
    }
}

module.exports = Documentos;