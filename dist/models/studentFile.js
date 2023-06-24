"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class StudentFile extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        grade: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Grade must not be empty',
            },
          },
        },
        comment: {
          type: _sequelize2.default.JSON,
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
} exports.default = StudentFile;
