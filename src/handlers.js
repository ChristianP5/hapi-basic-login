const Users = require('./models/users');


const get404Handler = (request, h) => h.redirect('/login');

const getLoginHandler = (request, h) => h.view('login');

const getSignUpHandler = (request, h) => h.view('sign-up');

const getCssHandler = (request, h) => {
  const { filename } = request.params;

  return h.file(`css/${filename}`);
};

const getHomeHandler = (request, h) => h.view('home');

const postSignUpHandler = async (request, h) => {
  const { username, password } = request.payload;
  const data = {
    username, password,
  };

  await Users.createUser(username, password);

  return h.view('home', data);
};

module.exports = {
  get404Handler,
  getLoginHandler,
  getSignUpHandler,
  getCssHandler,
  getHomeHandler,
  postSignUpHandler,
};
