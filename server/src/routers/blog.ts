import {
  getBlogListParamsSchema,
  getBlogListBodySchema,
  getBlogListResponseSchema,
  updatedBlogBodySchema,
  updatedBlogParamsSchema,
  updatedBlogResponseSchema,
  deletedBlogParamsSchema,
  deletedBlogResponseSchema,
  createdBlogBodySchema,
  createdBlogParamsSchema,
  createdBlogResponseSchema,
} from '../schema/blogs';

import type {
  GetBlogListParams,
  GetBlogListBody,
  GetBlogListResponse,
  UpdatedBlogParams,
  UpdatedBlogBody,
  UpdatedBlogResponse,
  DeletedBlogParams,
  DeletedBlogResponse,
  CreatedBlogBody,
  CreatedBlogParams,
  CreatedBlogResponse,
} from '../schema/blogs';
import { FastifyInstance } from 'fastify';

async function routes(fastify: FastifyInstance) {
  fastify.delete<{ Params: DeletedBlogParams; Reply: DeletedBlogResponse }>(
    '/blogs/:id/blog',
    {
      schema: {
        description: 'Delete Blog',
        tags: ['blog'],
        summary: 'Blog | Delete',
        params: deletedBlogParamsSchema,
        response: {
          200: deletedBlogResponseSchema,
        },
      },
    },
    (request, reply) => {
      const { id } = request.params;
      console.info(id, 'delete blog');
      reply.code(200).send({ status: true });
    },
  );

  fastify.put<{
    Params: UpdatedBlogParams;
    Body: UpdatedBlogBody;
    Response: UpdatedBlogResponse;
  }>(
    '/blogs/:id/form',
    {
      schema: {
        description: 'Blog Update',
        tags: ['blog'],
        summary: 'Blog | List',
        body: updatedBlogBodySchema,
        params: updatedBlogParamsSchema,
        response: {
          200: updatedBlogResponseSchema,
        },
      },
    },

    (request, reply) => {
      const { title, content, updatedAt } = request.body;
      const { id } = request.params;
      console.info(title, content, updatedAt, id, 'updateBlog');
      reply.code(200).send({ status: true });
    },
  );

  fastify.get<{
    Params: GetBlogListParams;
    Querystring: GetBlogListBody;
    Body: GetBlogListBody;
    Response: GetBlogListResponse;
  }>(
    '/blogs/:id/list',
    {
      schema: {
        description: 'Blog List',
        tags: ['blog'],

        summary: 'Blog | List',
        body: getBlogListBodySchema,
        params: getBlogListParamsSchema,
        response: {
          200: getBlogListResponseSchema,
        },
      },
    },
    (request, reply) => {
      const { keyword, pageSize, skip, startCreatedAt, endCreatedAt } =
        request.body;
      const { id } = request.params;
      console.info(keyword, pageSize, skip, startCreatedAt, endCreatedAt, id);

      reply.code(200).send({
        status: true,
        data: {
          pageTotalCount: 1,
          totalBlogCount: 1,
          blogs: [
            {
              userId: '5fc03087-d265-11e7-b8c6-83e29cd24f4c',
              userName: '5fc03087-d265-11e7-b8c6-83e29cd24f4c',
              title: '我想买做房子',
              content: '可是我没有钱啊',
              createdAt: '2022-12-21',
              updatedAt: '2033-12-23',
            },
          ],
        },
      });
    },
  );

  fastify.post<{
    Body: CreatedBlogBody;
    Params: CreatedBlogParams;
    Reply: CreatedBlogResponse;
  }>(
    '/blogs/:id/form',
    {
      schema: {
        description: 'Create Blog',
        tags: ['blog'],
        summary: 'Blog | Create',
        body: createdBlogBodySchema,
        params: createdBlogParamsSchema,
        response: {
          200: createdBlogResponseSchema,
        },
      },
    },
    (request, reply) => {
      const { id } = request.params;
      console.info('userId', id);
      const { ...rest } = request.body;
      fastify.prisma.blog.create({
        data: rest,
      });
      reply.code(200).send({ status: true });
    },
  );
}

export default routes;
