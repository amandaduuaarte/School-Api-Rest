module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('students', 'weight', {

      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  },

};
