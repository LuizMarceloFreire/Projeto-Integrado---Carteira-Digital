const { Model, DataTypes } = require('sequelize');

class Pessoas extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(),
            data: DataTypes.DATE(),
            email: DataTypes.STRING(),
            telefone: DataTypes.STRING(),
            sexo: DataTypes.STRING(1),
        }, {
            sequelize
        });
    }
}

module.exports = Pessoas;