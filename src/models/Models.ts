import mysql, { RowDataPacket, ConnectionOptions } from "mysql2/promise";

export default class Model {

  private connectionConfig: ConnectionOptions;

  constructor() {
    this.connectionConfig = {
      host: "127.0.0.1",
      user: "root",
      password: "F0712020",
      port: 3306,
      database: "API_USERS"
    };
  }

  private async getConnection() {
    return await mysql.createConnection(this.connectionConfig);
  }

  protected async query<T>(query: String, args: (String|number)[] = []): Promise<T | null> {
    try{
      const connection = await this.getConnection();
      const [ rows ] = await connection.query<RowDataPacket[]>(`${query}`, args);
      await connection.end();

      return rows.length > 0 ? (rows as T) : null;
    }catch(err){
      console.error(err); // save in file[todo]
      return null;
    }
  }

}
