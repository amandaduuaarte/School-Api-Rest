import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(null, multer.MulterError('File is not a valid MIME type'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'files'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${'file'}${extname(file.originalname)}`);
    },
  }),
};
