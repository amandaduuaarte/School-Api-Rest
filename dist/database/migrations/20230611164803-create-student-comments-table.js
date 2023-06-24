"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentFiles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      grade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comment: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'students',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      student_file_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'files',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('studentFiles');
  },
};
