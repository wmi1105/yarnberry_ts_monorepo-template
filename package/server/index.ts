import { sayHello } from "@mono/common";
import express from "express";

const app = express();

app.use("/test", (req, res) => {
  sayHello();
  res.status(204).send();
});

app.listen(4000, () => {
  console.log("🚀 Server Listening on localhost:4000!");
});
