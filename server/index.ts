import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import routes from './src/routers/user';
import prismaClient from './src/plugins/prisma';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const fastify: FastifyInstance = Fastify({});

fastify.register(prismaClient);

fastify.register(fastifySwagger, {
  // swagger: {
  //   info: {
  //     title: 'Swagger',
  //     description: 'Fastify Swagger API',
  //     version: '1.0.0',
  //   },
  //   host: 'localhost',
  //   consumes: ['application/json'],
  //   produces: ['application/json'],
  //   tags: [
  //     {
  //       name: 'users',
  //       description: 'User Swagger',
  //     },
  //     {
  //       name: 'blogs',
  //       description: 'Blog Swagger',
  //     },
  //   ],
  // },
});

fastify.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
});

fastify.register(routes);

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    console.info(address);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});

export default fastify;
