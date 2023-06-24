"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Name must be between 3 and 255 characters',
            },
          },
        },
        last_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'LastName must be between 3 and 255 characters',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Please enter a valid age number',
            },
          },
        },
        school_grade: {
          type: _sequelize2.default.FLOAT,
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
    this.hasMany(models.Profile, { foreignKey: 'student_id' });
    this.hasMany(models.StudentFile, { foreignKey: 'student_file_id' });
  }
} exports.default = Student;
