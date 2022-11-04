import type { FastifyInstance } from 'fastify';
import {
  userLoginSchema,
  userLoginResponseSchema,
  userListQueryStringBodySchema,
  userListQueryStringResponseSchema,
  userCreateBodySchema,
  userCreateResponseSchema,
  UserCreateBody,
  UserCreateResponse,
} from '../schema/users';
import type {
  UserLogin,
  UserLoginResponse,
  UserListQueryStringResponse,
  UserListQueryStringBody,
} from '../schema/users';
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
  fastify.get<{
    Body: UserListQueryStringBody;
    Response: UserListQueryStringResponse;
  }>(
    '/users/list',
    {
      schema: {
        description: 'Query User List',
        tags: ['user'],
        summary: 'User | Get Users List',
        body: userListQueryStringBodySchema,
        response: {
          200: userListQueryStringResponseSchema,
        },
      },
    },
    (request, response) => {
      const { keywords, skip, pageIndex, pageSize } = request.body;
      console.info('/users/list', keywords, skip, pageIndex, pageSize);
      response.code(200).send({
        success: true,
        data: [
          {
            username: 'WanSimon',
            mail: '254466555@qq.com',
            phone: '18638585665',
            gender: 'FEMALE',
            blogCount: 4,
          },
        ],
      });
    },
  );

  fastify.post<{ Body: UserCreateBody; Response: UserCreateResponse }>(
    '/users/form',
    {
      schema: {
        description: 'Create New User',
        tags: ['user'],
        body: userCreateBodySchema,
        response: {
          200: userCreateResponseSchema,
        },
      },
    },
    (request, reply) => {
      const {
        avatar,
        username,
        role,
        permission,
        experience,
        level,
        birthday,
        location,
        mail,
        phone,
        gender,
        blogCount,
        profile,
        signature,
        createdAt,
        updatedAt,
      } = request.body;
      const createUser = fastify.prisma.user.create({
        data: {
          avatar,
          username,
          // role: role || 'COMMON',
          permission,
          experience,
          level,
          birthday,
          location,
          mail,
          phone,
          // gender: gender || 'NOSURE',
          blogCount,
          profile,
          signature,
          createdAt,
          updatedAt,
        },
      });
    },
  );
  // fastify.post(<{}>(request,response)=>{

  // })
}

export default routes;
