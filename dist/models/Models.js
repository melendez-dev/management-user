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
const promise_1 = __importDefault(require("mysql2/promise"));
class Model {
    constructor() {
        this.connectionConfig = {
            host: "127.0.0.1",
            user: "root",
            password: "F0712020",
            port: 3306,
            database: "API_USERS"
        };
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield promise_1.default.createConnection(this.connectionConfig);
        });
    }
    query(query, args = []) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield this.getConnection();
                const [rows] = yield connection.query(`${query}`, args);
                yield connection.end();
                return rows.length > 0 ? rows : null;
            }
            catch (err) {
                console.error(err); // save in file[todo]
                return null;
            }
        });
    }
}
exports.default = Model;
