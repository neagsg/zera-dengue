const { Router } = require('express');
const multer = require('multer');

const UserController = require('./src/app/controllers/UserController');
const DescriptionController = require('./src/app/controllers/DescriptionController');
const multerConfig = require('./src/config/multer');

const routes = new Router();

const uploads = multer(multerConfig);

routes.get('/', (req, res) => {
  return res.render('index.html');
});

routes.post('/users', UserController.store);
routes.post('/descriptions', uploads.single('file'), DescriptionController.store);

module.exports = routes;