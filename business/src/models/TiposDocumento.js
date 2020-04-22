const { Model, DataTypes } = require('sequelize');

class TiposDocumento extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(model.Documentos, {
            foreignKey: 'TipoDocumentoId',
            as: 'documentos',
        });
    }
}

module.exports = TiposDocumento;