const { Model, DataTypes } = require('sequelize');

class TiposDocumento extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING(),
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsToMany(models.Documentos, {
            foreignKey: 'tipoDocumentoId',
            through: 'documentos',
            as: 'documentosTipos',
        })
    }
}

module.exports = TiposDocumento;