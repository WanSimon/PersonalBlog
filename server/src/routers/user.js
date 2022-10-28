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
const users_1 = require("../schema/users");
const schema_1 = require("../schema");
function routes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/login', {
            schema: {
                description: 'User,Login',
                tags: ['user', 'login'],
                summary: 'User | Login',
                body: users_1.userLoginSchema,
                response: {
                    200: users_1.userLoginResponseSchema,
                },
            },
        }, (request, reply) => {
            const { username, password } = request.body;
            console.log(username, password);
            reply.code(200).send({
                success: true,
                data: {
                    phone: '18638585665',
                    username,
                    mail: '2543141840@qq.com',
                    gender: schema_1.Gender.FEMALE,
                    blogCount: 2,
                },
            });
        });
    });
}
exports.default = routes;
