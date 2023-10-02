import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";

// routers
import usersRouter from "./routers/Users.router"

const app: Express = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/users", usersRouter);


app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3001`);
});
