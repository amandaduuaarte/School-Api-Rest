"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _student = require('../models/student'); var _student2 = _interopRequireDefault(_student);
var _profile = require('../models/profile'); var _profile2 = _interopRequireDefault(_profile);

class StudentController {
  async index(req, res) {
    const students = await _student2.default.findAll({
      attributes: ['id', 'name', 'last_name', 'email', 'age', 'school_grade'],
      order: [['id', 'DESC'], [_profile2.default, 'id', 'DESC']],
      include: {
        model: _profile2.default,
        attributes: ['url', 'filename'],
      },
    });

    res.status(200).json({
      students,
    });
  }

  async store(req, res) {
    try {
      const newStudent = await _student2.default.create(req.body);

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

      const student = await _student2.default.findByPk(id, {
        attributes: ['id', 'name', 'email', 'age', 'school_grade'],
        order: [['id', 'DESC'], [_profile2.default, 'id', 'DESC']],
        include: {
          model: _profile2.default,
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
    } catch (e2) {
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

      const student = await _student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      await student.destroy();
      return res.status(200).json({ success: true });
    } catch (e3) {
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

      const student = await _student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      const newStudent = await student.update(req.body);
      return res.status(200).json({ newStudent });
    } catch (e4) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

exports. default = new StudentController();
