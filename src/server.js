const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// Tambahan plugin Swagger
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Package = require("../package.json"); // agar otomatis ambil versi dll

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // Registrasi plugin Swagger
  const swaggerOptions = {
    info: {
      title: "Book Shelf API Documentation",
      version: Package.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(routes);

  await server.start();
  console.log(`🚀 Server berjalan pada ${server.info.uri}`);
};

init();
