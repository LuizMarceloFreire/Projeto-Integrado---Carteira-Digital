'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Documentos', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      imagem: {
        type: Sequelize.BLOB(),
        allowNull: false,
      },
      tipoDocumentoId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'tipo-documento', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Documentos');
  }
};
