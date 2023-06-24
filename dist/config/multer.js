"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const random = () => {
  Math.floor(Math.random() * 1000 + 1000);
};
exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(null, _multer2.default.MulterError('File is not a valid MIME type'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
