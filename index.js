const express = require("express");
var emailRouter = require("./routes/email");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/", emailRouter);

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
