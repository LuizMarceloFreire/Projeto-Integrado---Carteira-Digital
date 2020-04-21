const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(model.TipoDocumento, {
            foreignKey: 'TipoDocumentoId',
            as: 'documento',
        });
    }
}

module.exports = Pessoa;