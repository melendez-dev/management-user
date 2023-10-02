"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createCipheriv, scryptSync, } = require("node:crypto");
const { Buffer } = require("node:buffer");
class CryptoModel {
    constructor() {
        this.key = Buffer;
        this.SALT = "F0712020"; // change to env
        this.ALGORITHM = "aes-192-cbc";
        this.key = scryptSync(this.SALT, 'salt', 24);
        this.iv = Buffer.alloc(16, 0);
    }
    encrypted(password) {
        const cipher = createCipheriv(this.ALGORITHM, this.key, this.iv);
        let encrypted = cipher.update(password, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
}
exports.default = CryptoModel;
