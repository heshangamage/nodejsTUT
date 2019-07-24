const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
  console.log("middleware called");
  next();
};

app.use(myMiddleware);

app.listen(8080);
