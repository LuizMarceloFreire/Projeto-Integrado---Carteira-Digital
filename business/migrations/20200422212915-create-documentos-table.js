'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('documentos', {
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
      usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
      },
      tipoDocumentoId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'tipos-documento', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documentos');
  }
};
