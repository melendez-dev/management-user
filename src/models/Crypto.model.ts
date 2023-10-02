const {
  createCipheriv,
  scryptSync,
} = require("node:crypto")

const { Buffer } = require("node:buffer");

export default class CryptoModel {
  private SALT: String;
  private ALGORITHM: String;
  private key = Buffer;
  private iv: Buffer;

  constructor(){
    this.SALT = "F0712020"; // change to env
    this.ALGORITHM = "aes-192-cbc";
    this.key = scryptSync(this.SALT, 'salt', 24);
    this.iv = Buffer.alloc(16, 0);
  }

  encrypted(password: String): String {
    const cipher = createCipheriv(this.ALGORITHM, this.key, this.iv);
    let encrypted: String = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }

}
