import Sequelize, { Model } from 'sequelize';

export default class StudentFile extends Model {
  static init(sequelize) {
    super.init(
      {
        grade: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Grade must not be empty',
            },
          },
        },
        comment: {
          type: Sequelize.JSON,
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: 'studentFiles',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
    this.belongsTo(models.File, { foreignKey: 'student_file_id' });
  }
}
