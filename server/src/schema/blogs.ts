import { Static, Type } from '@sinclair/typebox';
import { Nullable } from './extendType';

export const getBlogListBodySchema = Type.Object({
  keyword: Type.Optional(Type.String()),
  pageSize: Type.Number({ default: 10 }),
  skip: Type.Number({ default: 0 }),
  startCreatedAt: Type.Optional(
    Type.String({
      format: 'date',
    }),
  ),
  endCreatedAt: Type.Optional(
    Type.String({
      format: 'date',
    }),
  ),
});

export const getBlogListParamsSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
});

export const getBlogListResponseSchema = Type.Object({
  status: Type.Boolean(),
  data: Type.Object({
    pageTotalCount: Type.Number(),
    totalBlogCount: Type.Number(),
    blogs: Type.Array(
      Nullable(
        Type.Object({
          userId: Type.String({
            format: 'uuid',
            examples: ['5fc03087-d265-11e7-b8c6-83e29cd24f4c'],
          }),
          userName: Type.String({ format: 'uuid' }),
          title: Type.String(),
          content: Type.String(),
          createdAt: Type.String({ format: 'date' }),
          updatedAt: Type.String({
            format: 'date',
          }),
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
  // userId: Type.String({ format: 'uuid' }),
  id: Type.String({ format: 'uuid' }),
});

export const updatedBlogResponseSchema = Type.Object({
  status: Type.Boolean(['true']),
});

export const blogDetailParamsSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
});

export const blogDetailResponseSchema = Type.Object({
  status: Type.Boolean({}),
  data: Type.Optional(
    Nullable(
      Type.Object({
        id: Type.String({ format: 'uuid' }),
        title: Type.String({}),
        content: Type.String({}),
        like: Type.Number(),
        dislike: Type.Number(),
        viewedCount: Type.Number(),
        userId: Type.String(),
        userName: Type.String(),
        categories: Type.Optional(
          Type.Array(
            Type.Object({
              id: Type.String({ format: 'uuid' }),
              tag: Type.String({}),
            }),
          ),
        ),
      }),
    ),
  ),
});

export const categoryCreateBodySchema = Type.Object({
  tag: Type.String({ examples: ['围棋'] }),
  userId: Type.String({ format: 'uuid' }),
  createdAt: Type.String({ format: 'date' }),
  updatedAt: Type.String({ format: 'date' }),
});

export const categoryCreateResponseSchema = Type.Object({
  status: Type.Boolean(),
});

export const deletedBlogParamsSchema = updatedBlogParamsSchema;
export const deletedBlogResponseSchema = updatedBlogResponseSchema;

export type GetBlogListBody = Static<typeof getBlogListBodySchema>;
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
