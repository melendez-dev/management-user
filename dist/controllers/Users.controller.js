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
const Users_model_1 = __importDefault(require("../models/Users.model"));
const Crypto_model_1 = __importDefault(require("../models/Crypto.model"));
const userModels = new Users_model_1.default();
const cryptoModel = new Crypto_model_1.default();
class UserController {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModels.getAll();
        });
    }
    getUserByID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModels.findById(userID);
        });
    }
    postRegisterUser(username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            // valid if the email and username exists
            const encrypted = cryptoModel.encrypted(password);
            return yield userModels.save(username, encrypted, email);
        });
    }
    postLoginUser(email, password) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModels.findByEmail(email);
            if (!user) {
                return false;
            }
            const encrypted = cryptoModel.encrypted(password);
            return encrypted == ((_a = user[0]) === null || _a === void 0 ? void 0 : _a.password);
        });
    }
}
exports.default = UserController;
