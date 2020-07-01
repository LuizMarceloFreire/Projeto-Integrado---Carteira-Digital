'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipos-documento', {
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
      temVerso: {
        type: Sequelize.BOOLEAN(),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipos-documento');
  }
};
