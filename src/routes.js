const {
  get404Handler, getLoginHandler, getSignUpHandler,
  getCssHandler
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
    path: '/sign-up',
    method: 'GET',
    handler: getSignUpHandler,
  },
  {
    path: '/css/{filename}',
    method: 'GET',
    handler: getCssHandler,
  },
];

module.exports = routes;
