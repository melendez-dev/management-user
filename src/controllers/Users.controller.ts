import UserModel from "../models/Users.model";
import CryptoModel from "../models/Crypto.model";


const userModels = new UserModel();
const cryptoModel = new CryptoModel();

export default class UserController {

  async getAllUsers ()  {
    return await userModels.getAll();
  }

  async getUserByID(userID: number) {
    return await userModels.findById(userID);
  }

  async postRegisterUser(username: String, password: String, email: String) {
    // valid if the email and username exists
    const encrypted: String = cryptoModel.encrypted(password);
    return await userModels.save(username, encrypted, email);
  }

  async postLoginUser(email: String, password: String): Promise<Boolean> {
    const user = await userModels.findByEmail(email);

    if (!user) {
      return false;
    }

    const encrypted: String = cryptoModel.encrypted(password);

    return encrypted == user[0]?.password;
  }

}
