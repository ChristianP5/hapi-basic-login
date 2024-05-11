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

  if (!username || !password) {
    return h.redirect('/sign-up');
  }
  const data = {
    username, password,
  };

  await Users.createUser(username, password);

  return h.view('home', data);
};

const getAllUsersHandler = async (request, h) => {
  const users = await Users.getAllUser();
  const data = { users };
  return h.view('users', data);
};

const postLoginHandler = async (request, h) => {
  const { username, password } = request.payload;
  if (!username || !password) {
    return h.redirect('/login');
  }
  const isValid = await Users.verifyUser(username, password);
  console.log(`isValid = ${isValid}`);
  if (isValid) {
    const data = {
      username, password,
    };
    return h.view('home', data);
  }
  return h.redirect('/login');
};

module.exports = {
  get404Handler,
  getLoginHandler,
  getSignUpHandler,
  getCssHandler,
  getHomeHandler,
  postSignUpHandler,
  getAllUsersHandler,
  postLoginHandler,
};
