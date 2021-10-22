const userController = () => {
  const getUser = async (req, res) => res.send('User GET Response');

  return {
    getUser,
  };
};

module.exports = userController;
