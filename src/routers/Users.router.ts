import { Router, Response, Request } from "express";
import UserController from "../controllers/Users.controller";

const usersRouter = Router();
const userController = new  UserController();

usersRouter.get("/", async(_req: Request, res: Response) => {
  try{
    const users = await userController.getAllUsers();
    res.json({
      status: "success",
      data: users
    }).status(200);
  }catch(err){
    console.error(err);
  }
});

usersRouter.get("/by-id/:id", async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await  userController.getUserByID(Number(id));
    res.json({
      status: "success",
      data: user
    }).status(200)
  }catch(err) {
    console.error(err);
  }
});

usersRouter.post("/register", async(req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    await userController.postRegisterUser(username, password, email);
    res.json({
      status: "success",
      message: "user save successly"
    }).status(201);
  }catch(err) {
    console.error(err);
  }
});

usersRouter.post("/login", async(req: Request, res: Response) => {
  try{
    const { email, password } = req.body;
    const validCredentials: Boolean = await userController.postLoginUser(email, password);
    const statusCode: number = validCredentials ? 200 : 401;

    res.json({
      status: validCredentials ? "success" : "error",
      message: validCredentials ? "valid credentials" : "invalid credentials",
      jwt: "json web token"
    }).status(statusCode)
    

  }catch(err) {
    console.log(err);
  }
})

export default usersRouter;
