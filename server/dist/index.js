"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_1 = __importDefault(require("./src/routers/user"));
const prisma_1 = __importDefault(require("./src/plugins/prisma"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const fastify = (0, fastify_1.default)({});
fastify.register(prisma_1.default);
fastify.register(swagger_1.default, {
// swagger: {
//   info: {
//     title: 'Swagger',
//     description: 'Fastify Swagger API',
//     version: '1.0.0',
//   },
//   host: 'localhost',
//   consumes: ['application/json'],
//   produces: ['application/json'],
//   tags: [
//     {
//       name: 'users',
//       description: 'User Swagger',
//     },
//     {
//       name: 'blogs',
//       description: 'Blog Swagger',
//     },
//   ],
// },
});
fastify.register(swagger_ui_1.default, {
    routePrefix: '/documentation',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    },
    uiHooks: {
        onRequest: function (request, reply, next) {
            next();
        },
        preHandler: function (request, reply, next) {
            next();
        },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
});
fastify.register(user_1.default);
fastify.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        console.info(address);
        process.exit(1);
    }
    console.info(`Server listening at ${address}`);
});
exports.default = fastify;
