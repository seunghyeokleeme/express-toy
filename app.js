import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { settingRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Devinan blog");

const handleCategory = (req, res) => res.send("Category");

const handleLogin = (req, res) => res.send("Log in");

const handleSignup = (req, res) => res.send("Sign up");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/category", handleCategory);
app.get("/login", handleLogin);
app.get("/signup", handleSignup);
app.use("/settings", settingRouter);

export default app;
