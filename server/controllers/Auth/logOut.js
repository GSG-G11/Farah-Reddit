const logOut = (req, res) => {
  console.log('i mah rt')
    res.clearCookie('token').json('deleted');
  };
  module.exports = { logOut };
  