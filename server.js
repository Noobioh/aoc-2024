const express = require("express");
const app = express();
const dayOneRoute = require("./routes/day-1");
const dayTwoRoute = require("./routes/day-2");
const dayThreeRoute = require("./routes/day-3/day-3");
const dayFourRoute = require("./routes/day-4/day-4");

// path to reload
// important should end with "/" if index.js

app.get("/", (req, res) => {
  res.send("<h1>Howdy, Express.js Server!</h1>");
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration

app.use("/day-1", dayOneRoute);
app.use("/day-2", dayTwoRoute);
app.use("/day-3", dayThreeRoute);
app.use("/day-4", dayFourRoute);

app.listen(port, () => {
  console.log(`Howdy from ${port}`);
});
