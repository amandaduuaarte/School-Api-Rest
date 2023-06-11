import multer from 'multer';
import FileConfig from '../config/file';
import File from '../models/file';

const upload = multer(FileConfig).single('file');

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
        const file = await File.create({ originalname, filename, student_id });

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

export default new FileController();
