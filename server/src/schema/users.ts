import { Static, Type } from '@sinclair/typebox';
import {
  basicParamsSchema,
  basicBodySchema,
  basicResponseSchema,
} from './basic';
import { Gender, Role, Permission } from './commonEnum';
import { Nullable } from './extendType';
export const userSchema = Type.Object({
  id: Type.String(),
  avatar: Type.Optional(Type.String()),
  username: Type.String(),
  role: Type.Enum(Role, { examples: [Role.COMMON] }),
  permission: Type.Enum(Permission, { examples: [Permission.ALL] }),
  experience: Type.Number({ default: 0 }),
  level: Type.Number({ default: 0 }),
  birthday: Type.Optional(Type.String({ format: 'date' })),
  location: Type.Optional(Type.String({ format: 'date' })),
  mail: Type.Optional(Type.String({ format: 'email' })),
  phone: Type.String(Type.String({ maxLength: 11, minLength: 11 })),
  gender: Type.Enum(Gender, { examples: [Gender.FEMALE] }),
  blogCount: Type.Number({ default: 0 }),
  profile: Type.Optional(Type.String()),
  signature: Type.Optional(Type.String()),
  createdAt: Type.String(Type.String({ format: 'date' })),
  updatedAt: Type.Optional(Type.String({ format: 'date' })),
});

export const userCreateBodySchema = userSchema;
export const userCreateResponseSchema = basicResponseSchema;

export type UserCreateBody = Static<typeof userCreateBodySchema>;
export type UserCreateResponse = Static<typeof userCreateResponseSchema>;

export const userUpdateParamsSchema = basicParamsSchema;
export const userUpdateBodySchema = Type.Partial(userSchema);

export const userUpdateResponseSchema = Type.Object({
  success: Type.Boolean(),
  data: Type.Partial(userSchema),
});

export type UserUpdateParams = Static<typeof userUpdateParamsSchema>;
export type UserUpdateBody = Static<typeof userUpdateBodySchema>;
export type UserUpdateResponse = Static<typeof userUpdateResponseSchema>;

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

export const userListQueryStringBodySchema = basicBodySchema;

export const userListQueryStringResponseSchema = Type.Object({
  success: Type.Boolean(),
  data: Nullable(Type.Array(userSchema)),
});

export const userListQueryStringParamsSchema = basicParamsSchema;

export type User = Static<typeof userSchema>;
export type UserLogin = Static<typeof userLoginSchema>;
export type UserLoginResponse = Static<typeof userLoginResponseSchema>;

export type GetUserDetailParams = Static<typeof getUserDetailParamsSchema>;
export type GetUserDetailResponse = Static<typeof getUserDetailResponseSchema>;

export type UserListQueryStringBody = Static<
  typeof userListQueryStringBodySchema
>;
export type UserListQueryStringResponse = Static<
  typeof userListQueryStringResponseSchema
>;
