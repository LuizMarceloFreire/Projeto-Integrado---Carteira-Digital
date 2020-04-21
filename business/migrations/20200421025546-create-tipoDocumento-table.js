'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipo-documento', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipo-documento');
  }
};
