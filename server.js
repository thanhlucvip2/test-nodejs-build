const express = require("express");
const app = express();
const port = 3001;
const UserModel = require("./DB");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const data = await UserModel.find({});
  res.json(data);
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  await UserModel.create({
    username,
    password,
  });
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
