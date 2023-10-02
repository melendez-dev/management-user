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
const Models_1 = __importDefault(require("./Models"));
;
class UserModel extends Models_1.default {
    constructor() {
        super();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.query("SELECT * FROM Users");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    findById(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.query("SELECT * FROM Users WHERE id = ?", [userID]);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    findByEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.query("SELECT * FROM Users WHERE email = ?", [userEmail]);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    save(username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.query("INSERT INTO Users (username, password, email) VALUES (?, ?, ?)", [username, password, email]);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
}
exports.default = UserModel;
