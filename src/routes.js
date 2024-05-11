const {
  get404Handler, getLoginHandler, getSignUpHandler,
  getCssHandler, getHomeHandler, postSignUpHandler,
  getAllUsersHandler, postLoginHandler,
} = require('./handlers');

const routes = [
  {
    path: '/{any*}',
    method: 'GET',
    handler: get404Handler,
  },
  {
    path: '/login',
    method: 'GET',
    handler: getLoginHandler,
  },
  {
    path: '/login',
    method: 'POST',
    handler: postLoginHandler,
  },
  {
    path: '/sign-up',
    method: 'GET',
    handler: getSignUpHandler,
  },
  {
    path: '/sign-up',
    method: 'POST',
    handler: postSignUpHandler,
  },
  {
    path: '/css/{filename}',
    method: 'GET',
    handler: getCssHandler,
  },
  {
    path: '/home',
    method: 'GET',
    handler: getHomeHandler,
  },
  {
    path: '/users',
    method: 'GET',
    handler: getAllUsersHandler,
  },
];

module.exports = routes;
