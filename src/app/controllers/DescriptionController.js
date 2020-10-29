const Description = require('../models/Description');

class DescriptionController {
  async store(req, res) {
    const {
      address,
      description
    } = await Description.create(req.body);

    return res.render('index.html');
  }
}

module.exports = new DescriptionController;