"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _file = require('../config/file'); var _file2 = _interopRequireDefault(_file);
var _file3 = require('../models/file'); var _file4 = _interopRequireDefault(_file3);

const upload = _multer2.default.call(void 0, _file2.default).single('file');

class FileController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const file = await _file4.default.create({ originalname, filename, student_id });

        return res.json({
          file,
        });
      } catch (error) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }
    });
  }
}

exports. default = new FileController();
