'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const date = new Date();
    return queryInterface.bulkInsert('tipos-documento', [
      {
        tipo: 'RG',
        temVerso: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        tipo: 'CPF',
        createdAt: date,
        updatedAt: date,
      },
    ], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('tipos-documento', null, {}),
};