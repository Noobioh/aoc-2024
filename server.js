const express = require("express");
const app = express();
const dayOneRoute = require("./routes/day-1");

// path to reload
// important should end with "/" if index.js

app.get("/", (req, res) => {
  res.send("<h1>Howdy, Express.js Server!</h1>");
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration

app.use("/day-1", dayOneRoute);

app.listen(port, () => {
  console.log(`Howdy from ${port}`);
});
