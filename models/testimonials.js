const mongoose = require("mongoose");

var testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank"
  },
  testimonial: {
    type: String,
    required: "Please type a message"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
