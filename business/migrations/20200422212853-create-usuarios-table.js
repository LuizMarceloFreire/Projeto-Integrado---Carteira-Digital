'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      dataNascimento: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(11),
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
