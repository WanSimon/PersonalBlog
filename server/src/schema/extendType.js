"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nullable = void 0;
const typebox_1 = require("@sinclair/typebox");
const Nullable = (type) => typebox_1.Type.Union([type, typebox_1.Type.Null()]);
exports.Nullable = Nullable;
