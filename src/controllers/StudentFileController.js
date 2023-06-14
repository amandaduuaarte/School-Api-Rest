import Studentfile from '../models/studentFile';
import Student from '../models/student';
import File from '../models/file';

class StudentFileController {
  async store(req, res) {
    const { student_id, file_id } = req.body;
    const isValidStudent = Student.findByPk(student_id);
    const isValidFile = File.findByPk(file_id);

    if (isValidFile || isValidStudent) {
      try {
        const newStudentFileComments = await Studentfile.create(req.body);
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

export default new StudentFileController();
