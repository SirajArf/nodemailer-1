const express = require("express");
var emailRouter = require("./routes/email");

const port = process.env.PORT || 3000;

const app = express();


//routes
app.use("/", emailRouter);

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
