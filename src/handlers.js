const get404Handler = (request, h) => h.redirect('/login');

const getLoginHandler = (request, h) => h.file('login.hbs');

const getSignUpHandler = (request, h) => h.file('sign-up.hbs');

const getCssHandler = (request, h) => {
  const { filename } = request.params;

  return h.file(`css/${filename}`);
};

const getHomeHandler = (request, h) => h.file('home.hbs');

const postSignUpHandler = (request, h) => {
  const { username, password } = request.payload;
  const data = {
    username, password,
  };
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
