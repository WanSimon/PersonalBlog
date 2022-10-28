"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userListResponseSchema = exports.userListQueryStringSchema = exports.getUserDetailResponseSchema = exports.getUserDetailParamsSchema = exports.userLoginResponseSchema = exports.userLoginSchema = exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const commonEnum_1 = require("./commonEnum");
const extendType_1 = require("./extendType");
exports.userSchema = typebox_1.Type.Object({
    username: typebox_1.Type.String(),
    mail: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'email' })),
    phone: typebox_1.Type.String(typebox_1.Type.String({ maxLength: 11, minLength: 11 })),
    gender: typebox_1.Type.Enum(commonEnum_1.Gender, { examples: [commonEnum_1.Gender.FEMALE] }),
    blogCount: typebox_1.Type.Number({ default: 0 }),
});
exports.userLoginSchema = typebox_1.Type.Object({
    username: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
});
exports.userLoginResponseSchema = typebox_1.Type.Object({
    success: typebox_1.Type.Boolean(),
    data: exports.userSchema,
});
exports.getUserDetailParamsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
});
exports.getUserDetailResponseSchema = typebox_1.Type.Object({
    success: typebox_1.Type.Boolean(),
    data: (0, extendType_1.Nullable)(typebox_1.Type.Partial(exports.userSchema)),
});
exports.userListQueryStringSchema = typebox_1.Type.Object({
    keywords: typebox_1.Type.String(),
    skip: typebox_1.Type.Number({ default: 1 }),
    pageSize: typebox_1.Type.Number({ default: 8 }),
    pageIndex: typebox_1.Type.Number({ default: 1 }),
});
exports.userListResponseSchema = typebox_1.Type.Object({
    success: typebox_1.Type.Boolean(),
    data: (0, extendType_1.Nullable)(typebox_1.Type.Array(exports.userSchema)),
});
