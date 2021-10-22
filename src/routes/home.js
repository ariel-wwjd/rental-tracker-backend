const { Router } = require('express');
const homeController = require('../controllers/home');

const routes = () => {
  const router = Router();
  const controller = homeController();

  router.route('/')
    .get(controller.getHome);

  return router;
};

module.exports = routes;
