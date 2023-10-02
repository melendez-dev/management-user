import { RowDataPacket } from "mysql2";
import Models from "./Models";

// [todo] add error to file;


interface UserInterface extends RowDataPacket {
  id: number;
  username: String;
  password: String;
  email: String;
};

export default class UserModel extends Models {

  constructor() {
    super()
  }

  async getAll(): Promise<UserInterface | null> {
    try {
      return await this.query<UserInterface>("SELECT * FROM Users");
    }catch(err) {
      console.log(err);
      return null;
    }
  }

  async findById(userID: number): Promise<UserInterface | null> {
    try{
      return await this.query<UserInterface>("SELECT * FROM Users WHERE id = ?", [userID]);
    }catch(err) {
      console.log(err);
      return null;
    }
  }

  async findByEmail(userEmail: String): Promise<UserInterface | null> {
    try{
      return await this.query<UserInterface>("SELECT * FROM Users WHERE email = ?", [userEmail]);
    }catch(err){
      console.log(err);
      return null;
    }
  }

  async save(username: String, password: String, email: String): Promise<RowDataPacket | null> {
    try{
      return await this.query("INSERT INTO Users (username, password, email) VALUES (?, ?, ?)", [username, password, email]);
    }catch(err) {
      console.log(err);
      return null;
    }
  }

}
