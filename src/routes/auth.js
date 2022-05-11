const { Router } = require('express');
const passport = require('passport');
// const { isUserAuthenticated } = require('../middleware/auth');

const routes = () => {
  const router = Router();
  const SUCCESS_LOGIN_URL = process.env.GOOGLE_LOGIN_SUCCESS;
  const FAIL_LOGIN_URL = process.env.GOOGLE_LOGIN_FAIL;

  router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  );

  router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureMessage: 'Login failed please try again later',
      failureRedirect: FAIL_LOGIN_URL,
      successRedirect: SUCCESS_LOGIN_URL,
    }),
    (req, res) => {
      res.send(`${req.user} logged in, Welcome!`);
    },
  );

  router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  router.get(
    '/user',
    // TODO: Review the api design endpoints for auth routes
    // isUserAuthenticated,
    (req, res) => {
      res.json(req.user);
    },
  );

  return router;
};

module.exports = routes;
