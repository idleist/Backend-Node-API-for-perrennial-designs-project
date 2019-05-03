const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/perrennial-api");
mongoose.Promise = Promise;

module.exports.Testimonial = require("./testimonials");
