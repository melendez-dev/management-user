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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_controller_1 = __importDefault(require("../controllers/Users.controller"));
const usersRouter = (0, express_1.Router)();
const userController = new Users_controller_1.default();
usersRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userController.getAllUsers();
        res.json({
            status: "success",
            data: users
        }).status(200);
    }
    catch (err) {
        console.error(err);
    }
}));
usersRouter.get("/by-id/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userController.getUserByID(Number(id));
        res.json({
            status: "success",
            data: user
        }).status(200);
    }
    catch (err) {
        console.error(err);
    }
}));
usersRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        yield userController.postRegisterUser(username, password, email);
        res.json({
            status: "success",
            message: "user save successly"
        }).status(201);
    }
    catch (err) {
        console.error(err);
    }
}));
usersRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const validCredentials = yield userController.postLoginUser(email, password);
        const statusCode = validCredentials ? 200 : 401;
        res.json({
            status: validCredentials ? "success" : "error",
            message: validCredentials ? "valid credentials" : "invalid credentials",
            jwt: "json web token"
        }).status(statusCode);
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = usersRouter;
