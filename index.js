const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

// Route Variables
var testimonialRoute = require("./routes/testimonials");

// Index Route
app.get("/", (req, res) => {
  res.json("HELLO");
});

// Link to routes
app.use("/api/testimonials", testimonialRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
