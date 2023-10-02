"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
class Database {
    constructor() {
        this.connection = mysql2_1.default.createConnection({
            host: "171.0.0.1",
            user: "root",
            password: "F0712020",
            port: 3306,
            database: "API_USERS"
        });
        this.connection.connect();
    }
    query(query, params) {
        return this.connection.query(`${query}`, params, (err, rows) => {
            if (err) {
                console.error(err);
            }
            return rows;
        });
    }
}
exports.default = Database;
