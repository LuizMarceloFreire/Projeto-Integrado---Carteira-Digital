const { Model, DataTypes } = require('sequelize');

class Documentos extends Model {
    static init(sequelize) {
        super.init({
            imagemDocumentoFrente: DataTypes.BLOB('medium'),
            imagemDocumentoVerso: DataTypes.BLOB('medium'),
            tipoDocumentoId: DataTypes.INTEGER(11),
            usuarioId: DataTypes.INTEGER(11),
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.TiposDocumento, {
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