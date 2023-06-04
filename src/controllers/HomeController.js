import Student from '../models/student';

class HomeController {
  async index(req, res) {
    const newStudent = Student.create({
      name: 'Amanda',
      last_name: 'Duarte',
      email: 'amanda@gmail.com',
      age: 21,
      height: 1.72,
      width: 68,
    });
    res.status(200).json({
      body: newStudent,
    });
  }
}

export default new HomeController();
