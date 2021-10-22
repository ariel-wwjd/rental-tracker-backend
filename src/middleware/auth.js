const isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send('you need to authenticate first.');
  }
};

module.exports = {
  isUserAuthenticated,
};
