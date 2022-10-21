import { Static, Type } from '@sinclair/typebox';
import { Gender } from './commonEnum';
import { Nullable } from './extendType';
export const userSchema = Type.Object({
  username: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
  phone: Type.String(Type.String({ maxLength: 11, minLength: 11 })),
  gender: Type.Enum(Gender, { examples: Gender.FEMALE }),
  blogCount: Type.Number({ default: 0 }),
});

export const userLoginSchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
});
export const userLoginResponseSchema = Type.Object({
  success: Type.Boolean(),
  data: userSchema,
});

export const getUserDetailParamsSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
});

export const getUserDetailResponseSchema = Type.Object({
  success: Type.Boolean(),
  data: Nullable(Type.Partial(userSchema)),
});

export const userListQueryStringSchema = Type.Object({
  keywords: Type.String(),
  skip: Type.Number({ default: 1 }),
  pageSize: Type.Number({ default: 8 }),
  pageIndex: Type.Number({ default: 1 }),
});

export const userListResponseSchema = Type.Object({
  success: Type.Boolean(),
  data: Nullable(Type.Array(userSchema)),
});

export type User = Static<typeof userSchema>;
export type UserLogin = Static<typeof userLoginSchema>;
export type UserLoginResponse = Static<typeof userLoginResponseSchema>;

export type GetUserDetailParams = Static<typeof getUserDetailParamsSchema>;
export type GetUserDetailResponse = Static<typeof getUserDetailResponseSchema>;

export type UserListQueryString = Static<typeof userListQueryStringSchema>;
export type UserListQueryStringResponse = Static<
  typeof userListQueryStringSchema
>;
