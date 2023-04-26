class HomeController {
  index(req, res) {
    res.status(200).json({
      body: 'Home route',
    });
  }
}

export default new HomeController();
