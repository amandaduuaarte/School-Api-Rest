"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

 class File extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'original name must not be empty',
            },
          },
        },
        filename: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'file name must not be empty',
            },
          },
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_app2.default.url}/files/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'files',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
} exports.default = File;
