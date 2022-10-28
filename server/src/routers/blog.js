"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_1 = require("../schema/blogs");
//Body Params Querystring Headers
function routes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/auth', {
            schema: {
                body: blogs_1.createdBlogBodySchema,
                params: blogs_1.createdBlogParamsSchema,
                response: {
                    200: blogs_1.createdBlogResponseSchema,
                },
            },
        }, (req, rep) => __awaiter(this, void 0, void 0, function* () {
            const { title, content, userId, userName, createdAt, updatedAt } = req.body;
            console.info(title, content, userId, userName, createdAt, updatedAt);
            rep.code(200).send({ status: true });
        }));
    });
}
exports.default = routes;
