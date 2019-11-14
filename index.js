const express = require("express");
const app = express();

const PORT = 4001;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
