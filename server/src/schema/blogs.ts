import { Static, Type } from '@sinclair/typebox';
import { Nullable } from './extendType';

export const getBlogListRequestSchema = Type.Object({
  keyword: Type.Optional(Type.String()),
  pageSize: Type.Number({ default: 10 }),
  skip: Type.Number({ default: 0 }),
  startCreatesAt: Type.Optional(
    Type.String({
      format: 'date',
    }),
  ),
});

export const getBlogListParamsSchema = Type.Object({
  userId: Type.String({ format: 'uuid' }),
});

export const getBlogListResponseSchema = Type.Object({
  status: Type.Boolean(),
  data: Type.Object({
    pageTotalCount: Type.Number(),
    totalBlogCount: Type.Number(),
    blogs: Type.Array(
      Nullable(
        Type.Object({
          userId: Type.String({ format: 'uuid' }),
          userName: Type.String({ format: 'uuid' }),
          title: Type.String(),
          content: Type.String(),
          createdAt: Type.String({ format: 'date' }),
          updatedAt: Type.String({ format: 'date' }),
        }),
      ),
    ),
  }),
});

export const createdBlogBodySchema = Type.Object({
  title: Type.String(),
  userName: Type.String(),
  userId: Type.String(),
  content: Type.String(),
  createdAt: Type.Optional(Type.String({ format: 'date' })),
  updatedAt: Type.String({
    format: 'date',
  }),
});

export const createdBlogParamsSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
});

export const createdBlogResponseSchema = Type.Object({
  status: Type.Boolean(),
});

export const updatedBlogBodySchema = Type.Object({
  title: Type.String(),
  content: Type.String(),
  updatedAt: Type.String({ format: 'date' }),
});

export const updatedBlogParamsSchema = Type.Object({
  userId: Type.String({ format: 'uuid' }),
  blogId: Type.String({ format: 'uuid' }),
});

export const updatedBlogResponseSchema = Type.Object({
  status: Type.Boolean(['true']),
});

export const deletedBlogParamsSchema = updatedBlogParamsSchema;
export const deletedBlogResponseSchema = updatedBlogResponseSchema;

export type GetBlogListRequest = Static<typeof getBlogListRequestSchema>;
export type GetBlogListParams = Static<typeof getBlogListParamsSchema>;
export type GetBlogListResponse = Static<typeof getBlogListResponseSchema>;

export type CreatedBlogBody = Static<typeof createdBlogBodySchema>;
export type CreatedBlogResponse = Static<typeof createdBlogResponseSchema>;
export type CreatedBlogParams = Static<typeof createdBlogParamsSchema>;

export type UpdatedBlogBody = Static<typeof updatedBlogBodySchema>;
export type UpdatedBlogParams = Static<typeof updatedBlogParamsSchema>;
export type UpdatedBlogResponse = Static<typeof updatedBlogResponseSchema>;

export type DeletedBlogParams = UpdatedBlogParams;
export type DeletedBlogResponse = UpdatedBlogResponse;
