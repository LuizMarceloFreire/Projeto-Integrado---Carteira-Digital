const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(),
            data: DataTypes.DATE(),
            cpf: DataTypes.STRING(11),
            email: DataTypes.STRING(),
            telefone: DataTypes.STRING(),
            sexo: DataTypes.STRING(1),
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