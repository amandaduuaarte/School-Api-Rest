class HomeController {
  async index(req, res) {
    res.status(200).json(
      'Index',
    );
  }
}

export default new HomeController();
