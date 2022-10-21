import type { FastifyInstance } from 'fastify';

import { userLoginSchema, userLoginResponseSchema } from '../schema/users';
import type { UserLogin, UserLoginResponse } from '../schema/users';
import { Gender } from '../schema';
import console from 'console';

async function routes(
  fastify: FastifyInstance,
  //   options: RouteShorthandOptions,
) {
  fastify.get<{ Body: UserLogin; Reply: UserLoginResponse }>(
    '/login',
    {
      schema: {
        body: userLoginSchema,
        response: {
          200: userLoginResponseSchema,
        },
      },
    },
    (request, reply) => {
      const { username, password } = request.body;
      console.log(password);
      reply.code(200).send({
        success: true,
        data: {
          phone: '18638585665',
          username,
          mail: '2543141840@qq.com',
          gender: Gender.FEMALE,
          blogCount: 2,
        },
      });
    },
  );
}

export default routes;
