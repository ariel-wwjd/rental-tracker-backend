const { Router } = require('express');
const userController = require('../controllers/user');

const routes = (User) => {
  const router = Router();
  const controller = userController(User);

  router.route('/')
    .get(controller.getUser)
    .post(controller.user);

  return router;
};

module.exports = routes;
