import Student from '../models/student';
import Photo from '../models/photo';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'last_name', 'email', 'age', 'school_grade'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });

    res.status(200).json({
      students,
    });
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);

      return res.status(200).json(
        newStudent,
      );
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Student ID is required'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'email', 'age', 'school_grade'],
        order: [['id', 'DESC'], [photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      return res.status(200).json({
        student,
      });
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Student ID is required'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      await student.destroy();
      return res.status(200).json({ success: true });
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Student ID is required'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      const newStudent = await student.update(req.body);
      return res.status(200).json({ newStudent });
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new StudentController();
