import multer from 'multer';
import multerConfig from '../config/multer';
import Profile from '../models/profile';

const upload = multer(multerConfig).single('photo');

class Profileontroller {
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
        const profile = await Profile.create({ originalname, filename, student_id });

        return res.json({
          profile,
        });
      } catch (error) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }
    });
  }
}

export default new Profileontroller();
