import { RowDataPacket } from "mysql2";

export default interface UserInterface extends RowDataPacket {
  id: number;
  username: String;
  password: String;
  email: String;
  photo?: String;
};

