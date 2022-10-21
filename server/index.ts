import Fastify from 'fastify';
import type { FastifyInstance, RouteShorthandOptions } from 'fastify';

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

interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  'h-Custom': string;
}

const authOpts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          data: {
            type: 'string',
          },
        },
      },
    },
  },
};

server.get<{ Querystring: IQuerystring; Headers: IHeaders }>(
  '/auth',
  authOpts,
  async (req) => {
    const { username, password } = req.query;
    if (username === 'WanSimon' && password === '123456') {
      return { data: 'success' };
    }
  },
);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    console.info(address);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});

export default server;
