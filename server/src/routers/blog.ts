import server from '../../index';
import {
  getBlogListParamsSchema,
  getBlogListRequestSchema,
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
  GetBlogListRequest,
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
//Body Params Querystring Headers

server.post<{
  Body: CreatedBlogBody;
  Params: CreatedBlogParams;
  Headers: unknown;
}>(
  '/auth',
  {
    schema: {
      body: createdBlogBodySchema,
      params: createdBlogParamsSchema,
      response: {
        200: createdBlogResponseSchema,
      },
    },
  },
  async (req, rep) => {
    const { title, content, userId, userName, createdAt, updatedAt } = req.body;
    console.info(title, content, userId, userName, createdAt, updatedAt);
    rep.code(200).send({ status: true });
  },
);
