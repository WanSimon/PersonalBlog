import Fastify from 'fastify';
import type { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Console } from 'console';

// const fastify = require('fastify')({ logger: true });
const server: FastifyInstance = Fastify({});

const opts: RouteShorthandOptions = {
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
};

server.get('/ping', opts, async () => {
  return { pong: 'it worked' };
});

// const start = async () => {
//   try {
//     await server.listen({ port: 3000 });
//     // const address = server.server.address();
//     // const port = typeof address === 'string' ? address : address?.port;
//   } catch (err) {
//     server.log.error(err);
//     process.exit(1);
//   }
// };

// start();

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    console.info(address);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});
