const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(),
            cpf: DataTypes.STRING(11),
            email: DataTypes.STRING(),
            senha: DataTypes.STRING(),
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Documentos, {
            foreignKey: 'usuarioId',
            as: 'documentosUsuario'
        });
    }
}

module.exports = Usuarios;