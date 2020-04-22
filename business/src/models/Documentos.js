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
    static init(models) {
        this.hasOne(model.TiposDocumento, {
            foreignKey: 'tipoDocumentoId',
            as: 'tipoDocumento',
        });
        this.belongsTo(model.Usuarios, {
            foreignKey: 'usuarioId',
            as: 'usuario',
        })
    }
}

module.exports = Documentos;