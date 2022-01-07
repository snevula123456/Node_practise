const express = require("express");

const app = express();

const PORT = 5000;

app.use("/api", require("./routes/products"));

app.use("/", (req, res) => {
  return res.send("Hello World Welcome to the NodeJS Environment");
});

app.listen(PORT, () => console.log(`server is connected with port`, PORT));
