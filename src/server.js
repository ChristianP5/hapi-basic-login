const Hapi = require('@hapi/hapi');
const path = require('path');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 9000,
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'views'),
      },
    },
  });

  await server.register([
    {
      plugin: require('@hapi/inert'),
    },
  ]);

  server.route(routes);

  await server.start();
  console.log(`Server started at ${server.info.uri}`);
};

init();
