const express = require("express");
const app = express();

const PORT = 4001;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Devinan blog");
}
function handleCategory(req, res) {
  res.send("Category");
}
function handleLogin(req, res) {
  res.send("Log in");
}
function handleSignup(req, res) {
  res.send("Sign up");
}

app.get("/", handleHome);
app.get("/category", handleCategory);
app.get("/login", handleLogin);
app.get("/signup", handleSignup);

app.listen(PORT, handleListening);
