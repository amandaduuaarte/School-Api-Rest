"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'category', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'category', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
