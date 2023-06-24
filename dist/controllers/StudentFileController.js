"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _studentFile = require('../models/studentFile'); var _studentFile2 = _interopRequireDefault(_studentFile);
var _student = require('../models/student'); var _student2 = _interopRequireDefault(_student);
var _file = require('../models/file'); var _file2 = _interopRequireDefault(_file);

class StudentFileController {
  async store(req, res) {
    const { student_id, file_id } = req.body;
    const isValidStudent = _student2.default.findByPk(student_id);
    const isValidFile = _file2.default.findByPk(file_id);

    if (isValidFile || isValidStudent) {
      try {
        const newStudentFileComments = await _studentFile2.default.create(req.body);
        return res.status(200).json(
          newStudentFileComments,
        );
      } catch (err) {
        return res.status(400).json({
          errors: err.mesagem,
        });
      }
    }
    return res.status(400).json({
      erros: ['Erros'],
    });
  }
}

exports. default = new StudentFileController();
