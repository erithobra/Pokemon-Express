'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [
      {
        name: "player1",
        username: "player1",
        password: "player1"
      },
      {
        name: "player2",
        username: "player2",
        password: "player2"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
