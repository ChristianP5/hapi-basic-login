const get404Handler = (request, h) => h.redirect('/login');

const getLoginHandler = (request, h) => h.file('login.html');

const getSignUpHandler = (request, h) => h.file('sign-up.html');

const getCssHandler = (request, h) => {
  const { filename } = request.params;

  return h.file(`css/${filename}`);
};

module.exports = {
  get404Handler,
  getLoginHandler,
  getSignUpHandler,
  getCssHandler,
};
