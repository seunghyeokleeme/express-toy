import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4001;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Devinan blog");

const handleCategory = (req, res) => res.send("Category");

const handleLogin = (req, res) => res.send("Log in");

const handleSignup = (req, res) => res.send("Sign up");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const handleMiddleware = (req, res, next) => {
  console.log("I'm middlewares!");
  return next();
};

app.get("/", handleMiddleware, handleHome);
app.get("/category", handleCategory);
app.get("/login", handleLogin);
app.get("/signup", handleSignup);

app.listen(PORT, handleListening);
