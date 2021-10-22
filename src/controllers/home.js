const homeController = () => {
  const getHome = async (req, res) => res.send('Home GET Response');

  return {
    getHome,
  };
};

module.exports = homeController;
