"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// routers
const Users_router_1 = __importDefault(require("./routers/Users.router"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/users", Users_router_1.default);
app.listen(3001, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:3001`);
});
