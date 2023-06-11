import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Name must be between 3 and 255 characters',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'LastName must be between 3 and 255 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email must be unique',
          },
          validate: {
            isEmail: {
              msg: 'Please enter a valid email address',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Please enter a valid age number',
            },
          },
        },
        school_grade: {
          type: Sequelize.FLOAT,
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: 'students',
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
}
