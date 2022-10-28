import type { FastifyInstance } from 'fastify';
import { userLoginSchema, userLoginResponseSchema } from '../schema/users';
import type { UserLogin, UserLoginResponse } from '../schema/users';
import { Gender } from '../schema';

async function routes(
  fastify: FastifyInstance,
  //   options: RouteShorthandOptions,
) {
  fastify.post<{ Body: UserLogin; Reply: UserLoginResponse }>(
    '/login',
    {
      schema: {
        description: 'User to Login',
        tags: ['user'],
        summary: 'User | Login',
        body: userLoginSchema,
        response: {
          200: userLoginResponseSchema,
        },
      },
    },
    (request, reply) => {
      const { username, password } = request.body;
      let blogs = fastify.prisma.blog.findMany();
      console.info(blogs);
      console.log(username, password);
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
