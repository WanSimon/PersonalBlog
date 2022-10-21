import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import { routes } from './src/routers';
const fastify: FastifyInstance = Fastify({});

fastify.register(routes);

fastify.get(
  '/ping',
  {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            pong: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  async () => {
    return { pong: 'it worked' };
  },
);

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    console.info(address);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});

export default fastify;
