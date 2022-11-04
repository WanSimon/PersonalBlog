import { Static, Type } from '@sinclair/typebox';
// import { Nullable } from './extendType';

export const basicParamsSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
});

export const basicResponseSchema = Type.Object({
  success: Type.Boolean(),
});

export const basicBodySchema = Type.Object({
  keywords: Type.Optional(Type.String()),
  skip: Type.Number({ default: 1 }),
  pageSize: Type.Number({ default: 8 }),
  pageIndex: Type.Number({ default: 1 }),
});

export const categorySchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  tag: Type.String(),
  userId: Type.String(),
  userName: Type.String(),
  createdAt: Type.String({ format: 'date' }),
  updatedAt: Type.String({ format: 'uuid' }),
});

export type BasicParams = Static<typeof basicParamsSchema>;
export type BasicResponse = Static<typeof basicResponseSchema>;
export type BasicBodyResponse = Static<typeof basicBodySchema>;
export type Category = Static<typeof categorySchema>;
