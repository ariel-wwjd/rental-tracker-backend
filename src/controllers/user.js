const userController = (User) => {
  const getUser = async (req, res) => res.send('User GET Response');

  const user = async (req, res) => {
    try {
      const userData = req.body;
      const currentUser = await User.findOne({ googleAccountId: userData.googleAccountId }).exec();
      if (currentUser) {
        return res.status(200).json(currentUser);
      }
      const userToSave = new User(userData);
      const newUser = await userToSave.save(userData);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  };

  return {
    getUser,
    user,
  };
};

module.exports = userController;
