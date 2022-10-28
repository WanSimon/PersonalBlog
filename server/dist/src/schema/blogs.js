"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedBlogResponseSchema = exports.deletedBlogParamsSchema = exports.updatedBlogResponseSchema = exports.updatedBlogParamsSchema = exports.updatedBlogBodySchema = exports.createdBlogResponseSchema = exports.createdBlogParamsSchema = exports.createdBlogBodySchema = exports.getBlogListResponseSchema = exports.getBlogListParamsSchema = exports.getBlogListRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const extendType_1 = require("./extendType");
exports.getBlogListRequestSchema = typebox_1.Type.Object({
    keyword: typebox_1.Type.Optional(typebox_1.Type.String()),
    pageSize: typebox_1.Type.Number({ default: 10 }),
    skip: typebox_1.Type.Number({ default: 0 }),
    startCreatesAt: typebox_1.Type.Optional(typebox_1.Type.String({
        format: 'date',
    })),
});
exports.getBlogListParamsSchema = typebox_1.Type.Object({
    userId: typebox_1.Type.String({ format: 'uuid' }),
});
exports.getBlogListResponseSchema = typebox_1.Type.Object({
    status: typebox_1.Type.Boolean(),
    data: typebox_1.Type.Object({
        pageTotalCount: typebox_1.Type.Number(),
        totalBlogCount: typebox_1.Type.Number(),
        blogs: typebox_1.Type.Array((0, extendType_1.Nullable)(typebox_1.Type.Object({
            userId: typebox_1.Type.String({ format: 'uuid' }),
            userName: typebox_1.Type.String({ format: 'uuid' }),
            title: typebox_1.Type.String(),
            content: typebox_1.Type.String(),
            createdAt: typebox_1.Type.String({ format: 'date' }),
            updatedAt: typebox_1.Type.String({ format: 'date' }),
        }))),
    }),
});
exports.createdBlogBodySchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    userName: typebox_1.Type.String(),
    userId: typebox_1.Type.String(),
    content: typebox_1.Type.String(),
    createdAt: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date' })),
    updatedAt: typebox_1.Type.String({
        format: 'date',
    }),
});
exports.createdBlogParamsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
});
exports.createdBlogResponseSchema = typebox_1.Type.Object({
    status: typebox_1.Type.Boolean(),
});
exports.updatedBlogBodySchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    content: typebox_1.Type.String(),
    updatedAt: typebox_1.Type.String({ format: 'date' }),
});
exports.updatedBlogParamsSchema = typebox_1.Type.Object({
    userId: typebox_1.Type.String({ format: 'uuid' }),
    blogId: typebox_1.Type.String({ format: 'uuid' }),
});
exports.updatedBlogResponseSchema = typebox_1.Type.Object({
    status: typebox_1.Type.Boolean(['true']),
});
exports.deletedBlogParamsSchema = exports.updatedBlogParamsSchema;
exports.deletedBlogResponseSchema = exports.updatedBlogResponseSchema;
