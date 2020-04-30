const { Model, DataTypes } = require('sequelize');

class Documentos extends Model {
    static init(sequelize) {
        super.init({
            imagem: DataTypes.BLOB(),
            tipoDocumentosId: DataTypes.INTEGER(11),
            usuarioId: DataTypes.INTEGER(11),
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasOne(models.TiposDocumento, {
            foreignKey: 'tipoDocumentoId',
            as: 'tipoDocumento',
        });
        this.belongsTo(models.Usuarios, {
            foreignKey: 'usuarioId',
            as: 'usuario',
        })
    }
}

module.exports = Documentos;