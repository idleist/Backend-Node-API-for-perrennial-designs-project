const express = require("express");
const router = express.Router();

// Database
var helpers = require("../helpers/testimonials");

router
  .route("/")
  .get(helpers.getTestimonials)
  .post(helpers.createTestimonial);

router
  .route("/:testimonialId")
  .get(helpers.getTestimonial)
  .put(helpers.updateTestimonial)
  .delete(helpers.deleteTestimonial);

module.exports = router;
