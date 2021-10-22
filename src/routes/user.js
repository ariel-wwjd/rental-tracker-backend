const { Router } = require('express');
const userController = require('../controllers/user');

const routes = () => {
  const router = Router();
  const controller = userController();

  router.route('/')
    .get(controller.getUser);

  return router;
};

module.exports = routes;
